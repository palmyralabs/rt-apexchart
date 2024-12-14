import { expect, test } from 'vitest';
import { useDataTransformer } from '../../../../../src/palmyra/apexchart/DataTransformer';
import { ITransformOptions } from '../../../../../src/palmyra/chart';


test('ObjectDataTransformer, DefaultKeys', () => {
    const data = {
        january: { value: 32 },
        february: { value: 27 }
    };
    const transformOptions: ITransformOptions = { dataType: 'object', xKey: 'key' }
    const transformer = useDataTransformer({transformOptions});
    const actual = transformer.transform(data);
    
    const expected = [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] }]
    expect(actual).toEqual(expected);
})


test('ObjectDataTransformer, Provided Keys', () => {
    const data = {
        january: { payable: 32 },
        february: { payable: 27 }
    };;
    const transformOptions: ITransformOptions = {
        dataType: 'object',
        xKey: 'month', yKey: ['payable']
    }
    const transformer = useDataTransformer({transformOptions});
    const actual = transformer.transform(data);
    const expected = [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] }]
    expect(actual).toEqual(expected)
})

test('ObjectDataTransformer, Provided Keys', () => {
    const data = {
        january: { payable: 32, progress:27 },
        february: { payable: 27, progress:25 }
    };;
    const transformOptions: ITransformOptions = {
        dataType: 'object',
        xKey: 'month', yKey: ['payable', 'progress']
    }
    const transformer = useDataTransformer({transformOptions});
    const actual = transformer.transform(data);
    const expected = [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] },
    { data: [{ x: 'january', y: 27 }, { x: 'february', y: 25 }] }]
    expect(actual).toEqual(expected)
})