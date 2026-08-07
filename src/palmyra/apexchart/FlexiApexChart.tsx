import { useDataTransformer } from "./DataTransformer";
import { ReactApexChart } from "./ReactApexChart";
import { FlexiApexChartProps } from "./types";
import { extend, useDeepMemo } from "./utils/ObjectUtils";


const FlexiApexChart = ({ transformOptions, seriesOptions, enhanceData,
    data,
    options,
    getChartConsumer,
    ...props }: FlexiApexChartProps) => {
    // Consumer construction and transform() must stay in one atomic unit:
    // some consumers (e.g. non-axis/pie charts) accumulate into closure-scoped
    // arrays on each transform() call rather than resetting in initialize(),
    // so a fresh consumer must be built for every transform, never reused
    // across renders on its own.
    //
    // useDataTransformer is a plain function (no React hooks inside it), so
    // calling it conditionally here - only when deps actually changed - is
    // safe despite the "use" prefix in its name.
    //
    // Memoized by VALUE, not reference: transformOptions/seriesOptions are
    // routinely passed as fresh literals by callers on every render, so a
    // plain useMemo would never hit its cache. data is intentionally compared
    // strictly (no ignoreFunctions) because enhanceData/getChartConsumer can
    // legitimately change the computed output - treating them as always-equal
    // would risk serving stale chart data.
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