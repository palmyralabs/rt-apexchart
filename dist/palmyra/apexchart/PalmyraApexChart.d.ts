import { RemoteQueryOptions } from '../chart/query/types';
import { FlexiApexChartProps, IPalmyraApexChart } from './types';
interface ReactApexChartProps extends Omit<FlexiApexChartProps, 'data'>, RemoteQueryOptions {
}
declare const PalmyraApexChart: import('react').ForwardRefExoticComponent<ReactApexChartProps & import('react').RefAttributes<IPalmyraApexChart>>;
export { PalmyraApexChart };
