import { expect, test } from 'vitest';
import { useDataTransformer } from '../../../../../src/palmyra/apexchart/DataTransformer';
import { ITransformOptions } from '../../../../../src/palmyra/chart';


test('KeyValueDataTransformerTest, DefaultKeys', () => {
    const data = {
        january: 32,
        february: 27
    };
    const transformOptions: ITransformOptions = { dataType: 'keyValue' }
    const transformer = useDataTransformer('line', { transformOptions });
    const actual = transformer.transform(data);
    const expected = { series: [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] }] }
    expect(actual).toEqual(expected);
})


test('KeyValueDataTransformerTest, ProvidedKeys', () => {
    const data = {
        january: 32,
        february: 27
    };
    const transformOptions: ITransformOptions = { dataType: 'keyValue', xKey: 'month', yKey: ['payable'] }
    const transformer = useDataTransformer('line', { transformOptions });
    const actual = transformer.transform(data);
    const expected = { series: [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] }] }
    expect(actual).toEqual(expected);
})

test('KeyValueDataTransformerTest, MultiKeys', () => {
    const data = {
        january: 32,
        february: 27
    };
    const transformOptions: ITransformOptions = { dataType: 'keyValue', xKey: 'month', yKey: ['payable', 'receivable'] }
    const transformer = useDataTransformer('line', { transformOptions });
    const actual = transformer.transform(data);
    const expected = { series: [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] }] }
    expect(actual).toEqual(expected);
})