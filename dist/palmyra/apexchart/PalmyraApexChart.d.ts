import { RemoteQueryOptions } from '../chart/query/types';
import { FlexiApexChartProps } from './types';
interface ReactApexChartProps extends Omit<FlexiApexChartProps, 'data'>, RemoteQueryOptions {
}
declare const PalmyraApexChart: (props: ReactApexChartProps) => import("react/jsx-runtime").JSX.Element;
export { PalmyraApexChart };
