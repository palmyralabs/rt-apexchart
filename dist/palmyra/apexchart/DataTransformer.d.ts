import { DataTransformer } from '@palmyralabs/ts-utils';
import { chartType, IDataTransformOptions } from './types';
declare const useDataTransformer: (type: chartType, props: IDataTransformOptions) => DataTransformer<any, any>;
export { useDataTransformer };
