import { DataTransformer, getArrayTransformer, getObjectTransformer } from "@palmyralabs/ts-utils";
import { generateAccessors } from "../chart/dataAccessor/AccessorGenerator";
import { getChartConsumer } from "./utils/AxisChartConsumer";
import { IDataTransformOptions } from "./types";


const getConsumer = (props: IDataTransformOptions) => {
    const consumerOptions = generateAccessors(props.transformOptions)
    return getChartConsumer(consumerOptions, props);
}

const useDataTransformer = (props: IDataTransformOptions): DataTransformer<any, any> => {
    const consumer = getConsumer(props);
    const dataType = props.transformOptions.dataType || 'array';
    if (dataType == 'array')
        return getArrayTransformer(consumer);
    else
        return getObjectTransformer(consumer);
}

export { useDataTransformer }