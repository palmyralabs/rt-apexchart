import { DataTransformer, getArrayTransformer, getObjectTransformer } from "@palmyralabs/ts-utils";
import { generateAccessors } from "../chart/dataAccessor/AccessorGenerator";
import getAxisChartConsumer from "./utils/AxisChartConsumer";
import { chartType, IDataTransformOptions } from "./types";
import getNonAxisChartConsumer from "./utils/nonAxisChartConsumer";


const getConsumer = (type: chartType, props: IDataTransformOptions) => {
    const consumerOptions = generateAccessors(props.transformOptions);
    if(props.getChartConsumer){
        return props.getChartConsumer(consumerOptions);
    }
    
    switch (type) {
        case 'bar':
        case 'line':
        case 'area':
        case 'radar':
        case 'scatter':
        case 'bubble':
            return getAxisChartConsumer(consumerOptions, props);
        case 'donut':
        case 'pie':
        case 'polarArea':
            return getNonAxisChartConsumer(consumerOptions, props);
        default:
            return getAxisChartConsumer(consumerOptions, props);
    }

}

const useDataTransformer = (type: chartType, props: IDataTransformOptions): DataTransformer<any, any> => {
    const consumer = getConsumer(type, props);
    const dataType = props.transformOptions.dataType || 'array';
    if (dataType == 'array')
        return getArrayTransformer(consumer);
    else
        return getObjectTransformer(consumer);
}

export { useDataTransformer }