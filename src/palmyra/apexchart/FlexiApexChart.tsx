import { useDataTransformer } from "./DataTransformer";
import { ReactApexChart } from "./ReactApexChart";
import { FlexiApexChartProps } from "./types";

const FlexiApexChart = ({ transformOptions, seriesOptions, enhanceData,
    data,
    ...props }: FlexiApexChartProps) => {
    const transformer = useDataTransformer({
        seriesOptions,
        transformOptions,
        enhanceData
    });
    const seriesData = transformer.transform(data);
    return <ReactApexChart {...props} series={seriesData} />
}

export { FlexiApexChart }