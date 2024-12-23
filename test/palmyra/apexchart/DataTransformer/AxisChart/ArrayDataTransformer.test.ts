import { expect, test } from 'vitest';
import { useDataTransformer } from '../../../../../src/palmyra/apexchart/DataTransformer';
import { ITransformOptions } from '../../../../../src/palmyra/chart';


test('ArrayDataTransformer, DefaultKeys', () => {
    const data = [{ name: 'january', value: 32 },
    { name: 'february', value: 27 }];
    const transformOptions: ITransformOptions = {}
    const transformer = useDataTransformer('line', { transformOptions });
    const actual = transformer.transform(data);

    const expected = { series: [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] }] }
    expect(actual).toEqual(expected)
})


test('ArrayDataTransformer, Provided Keys', () => {
    const data = [{ month: 'january', payable: 32 },
    { month: 'february', payable: 27 }];
    const transformOptions: ITransformOptions = { xKey: 'month', yKey: ['payable'] }
    const transformer = useDataTransformer('line', { transformOptions });
    const actual = transformer.transform(data);

    const expected = { series: [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] }] }
    expect(actual).toEqual(expected)
})

test('ArrayDataTransformer, Multi Keys', () => {
    const data = [{ month: 'january', payable: 32, progress: 27 },
    { month: 'february', payable: 27, progress: 25 }];

    const transformOptions: ITransformOptions = {
        xKey: 'month', yKey: ['payable', 'progress']
    }
    const transformer = useDataTransformer('line', { transformOptions });
    const actual = transformer.transform(data);
    const expected = {
        series: [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] },
        { data: [{ x: 'january', y: 27 }, { x: 'february', y: 25 }] }]
    }
    expect(actual).toEqual(expected)
})