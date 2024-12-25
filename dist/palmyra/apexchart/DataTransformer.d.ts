import { DataTransformer } from '@palmyralabs/ts-utils';
import { ChartConsumerGenerator, chartType, IDataTransformOptions } from './types';
interface IOptions extends IDataTransformOptions {
    getChartConsumer: ChartConsumerGenerator;
}
declare const useDataTransformer: (type: chartType, props: IOptions) => DataTransformer<any, any>;
export { useDataTransformer };
