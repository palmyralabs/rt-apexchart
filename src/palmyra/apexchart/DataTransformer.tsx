import { getArrayTransformer, getObjectTransformer } from "@palmyralabs/ts-utils";
import { ITransformOptions } from "../chart/dataAccessor/types";
import { generateAccessors } from "../chart/dataAccessor/AccessorGenerator";
import { getChartConsumer } from "./utils/AxisChartConsumer";


const getConsumer = (options: ITransformOptions) => {
    const consumerOptions = generateAccessors(options)
    return getChartConsumer(consumerOptions);
}

const useDataTransformer = (options: ITransformOptions) => {
    const consumer = getConsumer(options);
    const dataType = options.dataType || 'array';
    if (dataType == 'array')
        return getArrayTransformer(consumer);
    else
        return getObjectTransformer(consumer);
}

export { useDataTransformer }