import { expect, test } from 'vitest';
import { generateAccessors, ITransformOptions } from '../../../../../src/palmyra/chart';


test('AccessorGenerator, DefaultKeys', () => {
    const data = { name: 'january' };
    const options: ITransformOptions = { dataType: 'keyValue' }
    const consumerOptions = generateAccessors(options);

    const month = consumerOptions.xKeyAccessor(data, 'name')
    const value = consumerOptions.yKeyAccessors[0]('january')
    
    expect(month).toEqual('name');
    expect(value).toEqual('january');
})
