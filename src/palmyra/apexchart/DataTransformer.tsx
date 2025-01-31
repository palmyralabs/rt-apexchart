import { DataTransformer, getArrayTransformer, getObjectTransformer } from "@palmyralabs/ts-utils";
import { generateAccessors } from "../chart/dataAccessor/AccessorGenerator";
import getAxisChartConsumer from "./utils/AxisChartConsumer";
import { ChartConsumerGenerator, chartType, IDataTransformOptions } from "./types";
import getNonAxisChartConsumer from "./utils/nonAxisChartConsumer";


interface IOptions extends IDataTransformOptions {
    getChartConsumer?: ChartConsumerGenerator
}

const getConsumer = (type: chartType, props: IOptions) => {
    const consumerOptions = generateAccessors(props.transformOptions);
    if (props.getChartConsumer) {
        return props.getChartConsumer(consumerOptions, props);
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
        case 'radialBar':
            return getNonAxisChartConsumer(consumerOptions, props);
        default:
            return getAxisChartConsumer(consumerOptions, props);
    }

}

const useDataTransformer = (type: chartType, props: IOptions): DataTransformer<any, any> => {
    const consumer = getConsumer(type, props);
    const dataType = props.transformOptions.dataType || 'array';
    if (dataType == 'array')
        return getArrayTransformer(consumer);
    else
        return getObjectTransformer(consumer);
}

export { useDataTransformer }

export type { IOptions }