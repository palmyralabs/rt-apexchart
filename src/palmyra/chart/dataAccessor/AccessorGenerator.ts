
import { IChartConsumerOptions, ITransformOptions } from "./types";

import generateObjectAccessors from "./ObjectAccessor";
import generateKeyValueAccessors from "./KeyValueAccessor";


const generateAccessors = (options: ITransformOptions): IChartConsumerOptions => {
    if (options.dataType == 'keyValue') {
        return generateKeyValueAccessors(options)
    } else {
        return generateObjectAccessors(options)
    }
}

export { generateAccessors }