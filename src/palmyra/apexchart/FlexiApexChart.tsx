import { useDataTransformer } from "./DataTransformer";
import { ReactApexChart, ReactApexChartProps } from "./ReactApexChart"
import { ISeriesOptions, ITransformOptions } from "../chart/dataAccessor/types";


interface FlexiApexChartProps extends Omit<ReactApexChartProps, 'series'> {
    data: any,
    transformOptions: ITransformOptions,
    seriesOptions?: ISeriesOptions[]
}


const FlexiApexChart = ({ transformOptions,seriesOptions, ...props }: FlexiApexChartProps) => {
    const transformer = useDataTransformer(transformOptions, seriesOptions);
    const seriesData = transformer.transform(props.data);
    return <ReactApexChart {...props} series={seriesData} />
}

export { FlexiApexChart }
export type { FlexiApexChartProps }