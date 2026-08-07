// @vitest-environment jsdom
import { expect, test, vi, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { useDeepMemo } from '../../../../src/palmyra/apexchart/utils/ObjectUtils';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

// These exercise the real useRef-backed hook through an actual React render
// cycle, on top of the pure computeDeepMemo.test.ts coverage - this catches
// anything specific to React's hook lifecycle (per-instance isolation,
// behaviour across unmount/remount) that the pure logic tests can't see.

let container: HTMLDivElement | null = null;
let root: Root | null = null;

afterEach(() => {
    if (root) {
        act(() => root!.unmount());
    }
    if (container) {
        container.remove();
    }
    container = null;
    root = null;
});

function mount() {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    return root;
}

test('useDeepMemo, does not recompute across re-renders when caller passes fresh-but-equal literals', () => {
    const factory = vi.fn((n: number) => ({ doubled: n * 2 }));
    let latest: any;

    function Harness({ n }: { n: number }) {
        // A fresh object literal every render, mirroring how the chart
        // wrappers rebuild transformOptions/seriesOptions on every render.
        latest = useDeepMemo(() => factory(n), [{ n }]);
        return null;
    }

    const r = mount();
    act(() => r.render(<Harness n={5} />));
    expect(factory).toHaveBeenCalledTimes(1);
    const firstValue = latest;

    act(() => r.render(<Harness n={5} />));
    expect(factory).toHaveBeenCalledTimes(1); // still 1 - cache held despite the new {n} literal
    expect(latest).toBe(firstValue); // same reference reused

    act(() => r.render(<Harness n={5} />));
    expect(factory).toHaveBeenCalledTimes(1);
});

test('useDeepMemo, recomputes when the dependency value actually changes across renders', () => {
    const factory = vi.fn((n: number) => ({ doubled: n * 2 }));
    let latest: any;

    function Harness({ n }: { n: number }) {
        latest = useDeepMemo(() => factory(n), [{ n }]);
        return null;
    }

    const r = mount();
    act(() => r.render(<Harness n={5} />));
    expect(factory).toHaveBeenCalledTimes(1);

    act(() => r.render(<Harness n={6} />));
    expect(factory).toHaveBeenCalledTimes(2);
    expect(latest).toEqual({ doubled: 12 });
});

test('useDeepMemo, each component instance has an independent cache', () => {
    const factoryA = vi.fn(() => ({ id: 'a' }));
    const factoryB = vi.fn(() => ({ id: 'b' }));

    function HarnessA() {
        useDeepMemo(factoryA, [{ shape: 'same' }]);
        return null;
    }
    function HarnessB() {
        useDeepMemo(factoryB, [{ shape: 'same' }]);
        return null;
    }

    const r = mount();
    act(() => r.render(<><HarnessA /><HarnessB /></>));
    act(() => r.render(<><HarnessA /><HarnessB /></>));

    expect(factoryA).toHaveBeenCalledTimes(1);
    expect(factoryB).toHaveBeenCalledTimes(1);
});

test('useDeepMemo, unmounting and remounting starts a fresh cache (no cross-lifetime leakage)', () => {
    const factory = vi.fn(() => ({ built: true }));

    function Harness() {
        useDeepMemo(factory, [{ a: 1 }]);
        return null;
    }

    const r = mount();
    act(() => r.render(<Harness />));
    expect(factory).toHaveBeenCalledTimes(1);

    act(() => r.unmount());

    // Remount into the same container with a fresh root - simulates the
    // component tree being torn down and rebuilt (e.g. a filter branch that
    // conditionally renders the chart). afterEach() will unmount this root.
    root = createRoot(container!);
    act(() => root!.render(<Harness />));
    expect(factory).toHaveBeenCalledTimes(2);
});
