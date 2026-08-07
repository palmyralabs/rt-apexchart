// @vitest-environment jsdom
import { expect, test, vi, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { FlexiApexChart } from '../../../src/palmyra/apexchart/FlexiApexChart';
import getAxisChartConsumer from '../../../src/palmyra/apexchart/utils/AxisChartConsumer';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

// ReactApexChart wraps the real `apexcharts` library, which needs canvas/DOM
// APIs jsdom doesn't provide. That's irrelevant to what's being verified here
// (whether FlexiApexChart's memoization actually fires end-to-end), so it's
// replaced with a lightweight stub that just records the props it receives.
const { receivedProps, ReactApexChartMock } = vi.hoisted(() => {
    const receivedProps: any[] = [];
    const ReactApexChartMock = (props: any) => {
        receivedProps.push(props);
        return null;
    };
    return { receivedProps, ReactApexChartMock };
});

vi.mock('../../../src/palmyra/apexchart/ReactApexChart', () => ({
    ReactApexChart: ReactApexChartMock
}));

let container: HTMLDivElement | null = null;
let root: Root | null = null;

afterEach(() => {
    if (root) act(() => root!.unmount());
    if (container) container.remove();
    container = null;
    root = null;
    receivedProps.length = 0;
});

function mount() {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    return root;
}

test('FlexiApexChart, does not re-run the transform pipeline when the caller rebuilds equal-valued transformOptions/seriesOptions/data on every render', () => {
    // Wraps the real axis consumer so output stays correct while call count
    // is observable - mirrors how every *TrendChart.tsx wrapper in the app
    // passes a fresh getChartConsumer-free, but fresh-literal, config.
    const consumerSpy = vi.fn((consumerOptions, props) => getAxisChartConsumer(consumerOptions, props));

    function Harness({ data }: { data: any[] }) {
        return (
            <FlexiApexChart
                type="line"
                data={data}
                options={{}}
                // Fresh object/array literal every render - exactly what
                // MigrationVolumeTrendChart.tsx and its siblings do today.
                transformOptions={{ xKey: 'name', yKey: 'value' }}
                seriesOptions={[{ name: 'Series' }]}
                getChartConsumer={consumerSpy}
            />
        );
    }

    const r = mount();
    const data = [{ name: 'a', value: 1 }, { name: 'b', value: 2 }];

    act(() => r.render(<Harness data={data} />));
    expect(consumerSpy).toHaveBeenCalledTimes(1);
    const firstSeries = receivedProps.at(-1).series;

    // Re-render with a NEW array reference holding the SAME values - this is
    // what happens when an unrelated sibling chart's filter change causes
    // this component to re-render even though nothing it cares about changed.
    act(() => r.render(<Harness data={[{ name: 'a', value: 1 }, { name: 'b', value: 2 }]} />));
    expect(consumerSpy).toHaveBeenCalledTimes(1); // still 1 - no recompute
    expect(receivedProps.at(-1).series).toBe(firstSeries); // same reference reused end-to-end
});

test('FlexiApexChart, recomputes and produces new output when the data genuinely changes', () => {
    const consumerSpy = vi.fn((consumerOptions, props) => getAxisChartConsumer(consumerOptions, props));

    function Harness({ data }: { data: any[] }) {
        return (
            <FlexiApexChart
                type="line"
                data={data}
                options={{}}
                transformOptions={{ xKey: 'name', yKey: 'value' }}
                seriesOptions={[{ name: 'Series' }]}
                getChartConsumer={consumerSpy}
            />
        );
    }

    const r = mount();
    act(() => r.render(<Harness data={[{ name: 'a', value: 1 }]} />));
    expect(consumerSpy).toHaveBeenCalledTimes(1);

    act(() => r.render(<Harness data={[{ name: 'a', value: 999 }]} />));
    expect(consumerSpy).toHaveBeenCalledTimes(2);
    expect(receivedProps.at(-1).series).toEqual([{ name: 'Series', data: [{ x: 'a', y: 999 }] }]);
});

test('FlexiApexChart, merges the (unmemoized) options prop fresh every render while still reusing the memoized series', () => {
    const consumerSpy = vi.fn((consumerOptions, props) => getAxisChartConsumer(consumerOptions, props));

    function Harness({ data, color }: { data: any[]; color: string }) {
        return (
            <FlexiApexChart
                type="line"
                data={data}
                // Inline formatter, exactly like the app's *TrendChart.tsx
                // wrappers - a new function reference every render.
                options={{ colors: [color], yaxis: { labels: { formatter: (v: number) => v.toLocaleString() } } }}
                transformOptions={{ xKey: 'name', yKey: 'value' }}
                seriesOptions={[{ name: 'Series' }]}
                getChartConsumer={consumerSpy}
            />
        );
    }

    const r = mount();
    const data = [{ name: 'a', value: 1 }];

    act(() => r.render(<Harness data={data} color="blue" />));
    const firstSeries = receivedProps.at(-1).series;
    expect(receivedProps.at(-1).options.colors).toEqual(['blue']);

    // Only `color` (part of the unmemoized options prop) changes; data is untouched.
    act(() => r.render(<Harness data={data} color="red" />));

    expect(consumerSpy).toHaveBeenCalledTimes(1); // transform still not re-run
    expect(receivedProps.at(-1).series).toBe(firstSeries); // series reference preserved
    expect(receivedProps.at(-1).options.colors).toEqual(['red']); // but options still merged fresh, so the color change is not lost
});
