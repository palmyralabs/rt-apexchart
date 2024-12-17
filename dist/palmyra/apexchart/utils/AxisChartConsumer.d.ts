import { DataConsumer } from '@palmyralabs/ts-utils';
import { IChartConsumerOptions } from '../../chart/dataAccessor/types';
import { IDataTransformOptions } from '../types';
declare const getChartConsumer: (options: IChartConsumerOptions, props: IDataTransformOptions) => DataConsumer<any, any>;
export { getChartConsumer };
