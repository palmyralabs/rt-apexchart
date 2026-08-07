import { expect, test } from 'vitest';
import getNonAxisChartConsumer from '../../../../src/palmyra/apexchart/utils/nonAxisChartConsumer';
import getAxisChartConsumer from '../../../../src/palmyra/apexchart/utils/AxisChartConsumer';
import { generateAccessors } from '../../../../src/palmyra/chart/dataAccessor/AccessorGenerator';

// These document a real asymmetry between the two consumer types, and exist
// to guard the invariant FlexiApexChart's memoization depends on: consumer
// construction (getConsumer) and a single transform() call must always
// happen together, atomically, per render - never split so a consumer
// instance is reused across more than one transform() call.
//
// Reason: getArrayTransformer.transform() (see @palmyralabs/ts-utils) calls
// consumer.initialize() then feeds every row through processRow(), then
// getResult(). Whether that's safe to call a second time on the SAME
// consumer instance depends entirely on whether initialize() actually resets
// the consumer's internal accumulator - and that differs by chart family.

const options = { xKey: 'name', yKey: 'value' };

test('nonAxisChartConsumer (pie/donut/polarArea/radialBar): initialize() is a no-op, so reusing one consumer across two transform-like passes accumulates instead of resetting', () => {
    const consumerOptions = generateAccessors(options);
    const consumer = getNonAxisChartConsumer(consumerOptions, {} as any);

    // First "transform"
    consumer.initialize();
    consumer.processRow({ name: 'a', value: 1 }, 0);
    const first = consumer.getResult();
    expect(first).toEqual({ series: [1], labels: ['a'] });

    // Second "transform" reusing the SAME consumer instance - this is exactly
    // the pattern FlexiApexChart must never produce.
    consumer.initialize();
    consumer.processRow({ name: 'b', value: 2 }, 0);
    const second = consumer.getResult();

    // Documents the actual (leaky) behaviour: 'a' from the first pass is
    // still present, series/labels grew instead of being replaced.
    expect(second).toEqual({ series: [1, 2], labels: ['a', 'b'] });
});

test('nonAxisChartConsumer: a freshly constructed consumer per transform (the pattern this library uses) does not leak', () => {
    const consumerOptions = generateAccessors(options);

    const buildAndTransform = (row: any) => {
        const consumer = getNonAxisChartConsumer(consumerOptions, {} as any);
        consumer.initialize();
        consumer.processRow(row, 0);
        return consumer.getResult();
    };

    const first = buildAndTransform({ name: 'a', value: 1 });
    const second = buildAndTransform({ name: 'b', value: 2 });

    expect(first).toEqual({ series: [1], labels: ['a'] });
    expect(second).toEqual({ series: [2], labels: ['b'] }); // no leakage from the first call
});

test('AxisChartConsumer (line/bar/area): initialize() genuinely resets, by contrast - reuse across two transform-like passes is safe', () => {
    const consumerOptions = generateAccessors(options);
    const consumer = getAxisChartConsumer(consumerOptions, {} as any);

    consumer.initialize();
    consumer.processRow({ name: 'a', value: 1 }, 0);
    const first = consumer.getResult();
    expect(first).toEqual({ series: [{ data: [{ x: 'a', y: 1 }] }] });

    consumer.initialize();
    consumer.processRow({ name: 'b', value: 2 }, 0);
    const second = consumer.getResult();

    // Unlike the non-axis case above, this correctly reflects only the
    // second pass's data - no accumulation.
    expect(second).toEqual({ series: [{ data: [{ x: 'b', y: 2 }] }] });
});
