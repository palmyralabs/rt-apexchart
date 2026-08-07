import { expect, test, vi } from 'vitest';
import { computeDeepMemo } from '../../../../src/palmyra/apexchart/utils/ObjectUtils';

// computeDeepMemo is the pure decision logic behind useDeepMemo, extracted so
// it can be exercised without a React renderer. It answers one question per
// call: given the previous cached entry and the new deps, should factory()
// run again, or should the cached value be reused?

test('computeDeepMemo, first call (prev=null) always invokes factory', () => {
    const factory = vi.fn(() => ({ result: 'computed' }));
    const entry = computeDeepMemo(null, factory, [1, 2]);

    expect(factory).toHaveBeenCalledTimes(1);
    expect(entry.value).toEqual({ result: 'computed' });
    expect(entry.deps).toEqual([1, 2]);
});

test('computeDeepMemo, deep-equal deps with new references reuse the cached value without calling factory again', () => {
    const factory = vi.fn(() => ({ result: 'computed' }));
    const first = computeDeepMemo(null, factory, [{ xKey: 'a' }, [{ name: 'series-1' }]]);

    // Simulate a caller rebuilding the same-shaped literals on every render.
    const second = computeDeepMemo(first, factory, [{ xKey: 'a' }, [{ name: 'series-1' }]]);

    expect(factory).toHaveBeenCalledTimes(1);
    expect(second).toBe(first); // whole entry reused, not just an equal value
    expect(second.value).toBe(first.value); // referential stability payoff
});

test('computeDeepMemo, a genuine value change in deps triggers recomputation', () => {
    const factory = vi.fn()
        .mockReturnValueOnce({ result: 'first' })
        .mockReturnValueOnce({ result: 'second' });

    const first = computeDeepMemo(null, factory, [{ xKey: 'a' }]);
    const second = computeDeepMemo(first, factory, [{ xKey: 'b' }]);

    expect(factory).toHaveBeenCalledTimes(2);
    expect(second).not.toBe(first);
    expect(second.value).toEqual({ result: 'second' });
});

test('computeDeepMemo, deps array length change triggers recomputation', () => {
    const factory = vi.fn(() => ({}));
    const first = computeDeepMemo(null, factory, [1, 2]);
    computeDeepMemo(first, factory, [1, 2, 3]);

    expect(factory).toHaveBeenCalledTimes(2);
});

test('computeDeepMemo, repeated calls with unchanged deps never recompute, however many times', () => {
    const factory = vi.fn(() => ({ built: true }));
    let entry = computeDeepMemo(null, factory, [{ a: 1 }]);

    for (let i = 0; i < 5; i++) {
        entry = computeDeepMemo(entry, factory, [{ a: 1 }]);
    }

    expect(factory).toHaveBeenCalledTimes(1);
});

test('computeDeepMemo, empty deps array is treated as stable across calls', () => {
    const factory = vi.fn(() => 'value');
    const first = computeDeepMemo(null, factory, []);
    const second = computeDeepMemo(first, factory, []);

    expect(factory).toHaveBeenCalledTimes(1);
    expect(second).toBe(first);
});

test('computeDeepMemo, a data array that changes by value (not just reference) recomputes', () => {
    const factory = vi.fn(() => ({}));
    const dataV1 = [{ name: 'a', value: 1 }];
    const dataV2 = [{ name: 'a', value: 2 }]; // one field differs

    const first = computeDeepMemo(null, factory, [dataV1]);
    computeDeepMemo(first, factory, [dataV2]);

    expect(factory).toHaveBeenCalledTimes(2);
});

test('computeDeepMemo, the same data array reference across renders is recognised as unchanged', () => {
    const factory = vi.fn(() => ({}));
    const data = [{ name: 'a', value: 1 }];

    const first = computeDeepMemo(null, factory, [data]);
    const second = computeDeepMemo(first, factory, [data]); // same reference, as in this codebase's fetch-result state

    expect(factory).toHaveBeenCalledTimes(1);
    expect(second).toBe(first);
});
