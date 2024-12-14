import { expect, test } from 'vitest';
import { generateAccessors, ITransformOptions } from '../../../../../src/palmyra/chart';


test('AccessorGenerator, DefaultKeys', () => {
    const data = {name:'january', value:32};
    const options:ITransformOptions = {}
    const consumerOptions = generateAccessors(options);

    const month = consumerOptions.xKeyAccessor(data)
    const value = consumerOptions.yKeyAccessors[0](data)

    expect(month).toEqual('january');
    expect(value).toEqual(32);
})

test('AccessorGenerator, ProvidedKeys', () => {
    const data = {month:'january', amount:32, progress:27};
    const options:ITransformOptions = {xKey:'month', yKey:'amount'}
    const consumerOptions = generateAccessors(options);

    const month = consumerOptions.xKeyAccessor(data)
    const value = consumerOptions.yKeyAccessors[0](data)

    expect(month).toEqual('january');
    expect(value).toEqual(32);
})

test('AccessorGenerator, Provided MultiYKeys', () => {
    const data = {month:'january', amount:32, progress:27};
    const options:ITransformOptions = {xKey:'month', yKey:['amount', 'progress']}
    const consumerOptions = generateAccessors(options);
    
    const month = consumerOptions.xKeyAccessor(data)
    const value = consumerOptions.yKeyAccessors[0](data)
    const progress = consumerOptions.yKeyAccessors[1](data)

    expect(month).toEqual('january');
    expect(value).toEqual(32);
    expect(progress).toEqual(27);
})