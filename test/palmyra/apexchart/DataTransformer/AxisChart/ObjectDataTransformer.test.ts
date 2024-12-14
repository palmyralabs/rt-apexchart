import { expect, test } from 'vitest';
import { useDataTransformer } from '../../../../../src/palmyra/apexchart/DataTransformer';
import { ITransformOptions } from '../../../../../src/palmyra/chart';


test('AccessorGenerator, DefaultKeys', () => {
    const data = {
        january: { value: 32 },
        february: { value: 27 }
    };
    const options: ITransformOptions = { dataType: 'object', xKey: 'key' }
    const transformer = useDataTransformer(options);
    const actual = transformer.transform(data);
    console.log(actual[0].data);
    const expected = [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] }]
    expect(actual).toEqual(expected);
})


test('AccessorGenerator, Provided Keys', () => {
    const data = [{ month: 'january', payable: 32 },
    { month: 'february', payable: 27 }];
    const options: ITransformOptions = { xKey: 'month', yKey: ['payable'] }
    const transformer = useDataTransformer(options);
    const actual = transformer.transform(data);        
    const expected = [{ data: [{ x: 'january', y: 32 }, { x: 'february', y: 27 }] }]
    expect(actual).toEqual(expected)
})