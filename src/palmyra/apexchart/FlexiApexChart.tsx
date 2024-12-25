import { useDataTransformer } from "./DataTransformer";
import { ReactApexChart } from "./ReactApexChart";
import { FlexiApexChartProps } from "./types";
import { extend } from "./utils/ObjectUtils";


const FlexiApexChart = ({ transformOptions, seriesOptions, enhanceData,
    data,
    options,
    getChartConsumer,
    ...props }: FlexiApexChartProps) => {
    const transformer = useDataTransformer(props.type, {
        seriesOptions,
        transformOptions,
        enhanceData,
        getChartConsumer
    });
    const { series, ...o } = transformer.transform(data);
    const opt = extend(options, o);
    return <ReactApexChart options={opt} {...props} series={series} />
}

export { FlexiApexChart }