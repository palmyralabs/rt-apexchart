//@ts-ignore
import ApexCharts from "apexcharts";
import * as ApexChartsType from 'apexcharts'
import { useEffect, useRef } from "react";


function omit(obj: any, keysToRemove: string[]) {
    let newObj = { ...obj };
    keysToRemove.forEach((key) => {
        delete newObj[key];
    });
    return newObj;
}

function deepEqual(obj1: any, obj2: any, visited = new WeakSet()) {
    if (obj1 === obj2) return true;

    if (
        typeof obj1 !== 'object' ||
        obj1 === null ||
        typeof obj2 !== 'object' ||
        obj2 === null
    ) {
        return false;
    }

    if (visited.has(obj1) || visited.has(obj2)) return true; // Handle circular refs
    visited.add(obj1);
    visited.add(obj2);

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key], visited)) {
            return false;
        }
    }

    return true;
}

interface ReactApexChartProps extends ApexChartsType.ApexOptions {
    type: ApexChart["type"]
    width?: string;
    height?: string;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries
    options?: Omit<ApexCharts.ApexOptions, 'series'>
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
            }
        }
        prevOptions.current = options

    }, [options, series, height, width]);

    const getConfig = () => {
        const newOptions = {
            chart: { type, height, width },
            series
        };
        console.log(newOptions);
        return extend(options, newOptions);
    };

    const isObject = (item) => {
        return item && typeof item === "object" && !Array.isArray(item);
    };

    const extend = (target, source) => {
        let output = { ...target };
        if (isObject(target) && isObject(source)) {
            Object.keys(source).forEach((key) => {
                if (isObject(source[key])) {
                    if (!(key in target)) {
                        Object.assign(output, { [key]: source[key] });
                    } else {
                        output[key] = extend(target[key], source[key]);
                    }
                } else {
                    Object.assign(output, { [key]: source[key] });
                }
            });
        }
        return output;
    };

    const rest = omit(restProps, ['data']);

    return <div ref={chartRef} {...rest} />;
}

export { ReactApexChart }
export type { ReactApexChartProps }