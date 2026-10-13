import { useDataTransformer } from "./DataTransformer";
import { ReactApexChart } from "./ReactApexChart";
import { FlexiApexChartProps } from "./types";
import { extend, useDeepMemo } from "./utils/ObjectUtils";


const FlexiApexChart = ({ transformOptions, seriesOptions, enhanceData,
    data,
    options,
    getChartConsumer,
    ...props }: FlexiApexChartProps) => {
    const { series, ...o } = useDeepMemo(() => {
        const transformer = useDataTransformer(props.type, {
            seriesOptions,
            transformOptions,
            enhanceData,
            getChartConsumer
        });
        return transformer.transform(data);
    }, [props.type, data, transformOptions, seriesOptions, enhanceData, getChartConsumer]);

    const opt = extend(options, o);
    return <ReactApexChart options={opt} {...props} series={series} />
}

export { FlexiApexChart }