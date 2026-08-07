//@ts-ignore
import ApexCharts from "apexcharts";
import { useEffect, useRef } from "react";
import { ReactApexChartProps } from "./types";
import { deepEqual as deepEqualBase } from "./utils/ObjectUtils";


// function omit(obj: any, keysToRemove: string[]) {
//     let newObj = { ...obj };
//     keysToRemove.forEach((key) => {
//         delete newObj[key];
//     });
//     return newObj;
// }

// ApexCharts options routinely embed inline formatter callbacks
// (yaxis.labels.formatter, tooltip.y.formatter, ...) that callers rebuild as
// fresh functions on every render. Comparing those strictly would make this
// check see "changed" on every render regardless of real content, forcing an
// updateOptions() call every time. This is only a should-I-notify-the-chart
// heuristic - not a correctness path - so it's safe to ignore function
// identity here.
function deepEqual(obj1: any, obj2: any) {
    return deepEqualBase(obj1, obj2, { ignoreFunctions: true });
}

const ReactApexChart = ({
    type = "line",
    width = "100%",
    height = "auto",
    series,
    options = {},
    ...restProps
}: ReactApexChartProps) => {
    const chartRef = useRef(null);
    let chart = useRef(null);
    const prevOptions = useRef({})

    useEffect(() => {
        prevOptions.current = options;
        const current = chartRef.current;
        chart.current = new ApexCharts(current, getConfig());
        chart.current.render();

        return () => {
            if (chart.current && typeof chart.current.destroy === "function") {
                chart.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        const prevSeries = chart.current.w.config.series

        const seriesChanged = !deepEqual(prevSeries, series)
        
        const optionsChanged =
            !deepEqual(prevOptions.current, options) ||
            height !== chart.current.opts.chart.height ||
            width !== chart.current.opts.chart.width;

        if (seriesChanged || optionsChanged) {
            if (!seriesChanged) {
                // series has not changed, but options or size have changed
                chart.current.updateOptions(getConfig());
            } else if (!optionsChanged) {
                // options or size have not changed, just the series has changed
                chart.current.updateSeries(series);
            } else {
                // both might be changed
                chart.current.updateOptions(getConfig());
                chart.current.updateSeries(series);
            }
        }
        prevOptions.current = options

    }, [options, series, height, width]);

    const getConfig = () => {
        const newOptions = {
            chart: { type, height, width },
            series
        };
        const r = extend(restProps, options, newOptions);
        return r;
    };

    const isObject = (item) => {
        return item && typeof item === "object" && !Array.isArray(item);
    };

    const extend = (target, ...sources) => {
        if(target && !isObject(target)){
            console.error("target of " + typeof target + " is not supported");
        }
        
        let output = target ? { ...target } : {};
        sources.forEach((source) => {
            if (isObject(source)) {
                Object.keys(source).forEach((key) => {
                    if (isObject(source[key])) {
                        if (!(key in output)) {
                            Object.assign(output, { [key]: source[key] });
                        } else {
                            output[key] = extend(output[key], source[key]);
                        }
                    } else {
                        Object.assign(output, { [key]: source[key] });
                    }
                });
            }
        });
        return output;
    };

    return <div ref={chartRef} />;
}

export { ReactApexChart }