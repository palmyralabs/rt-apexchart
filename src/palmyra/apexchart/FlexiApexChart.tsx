import { useDataTransformer } from "./DataTransformer";
import { ReactApexChart } from "./ReactApexChart";
import { FlexiApexChartProps } from "./types";

const FlexiApexChart = ({ transformOptions, seriesOptions, enhanceData,
    data,
    ...props }: FlexiApexChartProps) => {
    const transformer = useDataTransformer(props.type, {
        seriesOptions,
        transformOptions,
        enhanceData
    });
    const p = transformer.transform(data);
    return <ReactApexChart {...props} {...p} />
}

export { FlexiApexChart }