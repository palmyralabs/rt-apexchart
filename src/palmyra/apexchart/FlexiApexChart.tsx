import { useDataTransformer } from "./DataTransformer";
import { ReactApexChart, ReactApexChartProps } from "./ReactApexChart"
import { ITransformOptions } from "./types";


interface FlexiApexChartProps extends Omit<ReactApexChartProps, 'series'> {
    data: any,
    transformOptions: ITransformOptions
}


const FlexiApexChart = ({ transformOptions, ...props }: FlexiApexChartProps) => {
    const transformer = useDataTransformer(transformOptions);
    const seriesData = transformer.transform(props.data);
    return <ReactApexChart {...props} series={seriesData} />
}

export { FlexiApexChart }
export type { FlexiApexChartProps }