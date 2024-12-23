import { DataConsumer } from '@palmyralabs/ts-utils';
import { IChartConsumerOptions } from '../../chart/dataAccessor/types';
import { IDataTransformOptions } from '../types';
declare const getNonAxisChartConsumer: (options: IChartConsumerOptions, props: IDataTransformOptions) => DataConsumer<any, any>;
export default getNonAxisChartConsumer;
