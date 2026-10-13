import { useMemo, useState } from "react";

interface IDataPointClick {
    seriesIndex?: number;
    dataPointIndex?: number;
    index?: number;
    seriesName?: string;
    dataPoint: any;
}

const extractDataPoint = (config: any): IDataPointClick => {
    const { seriesIndex, dataPointIndex, w } = config;
    const allSeries = w?.config?.series;
    const series = allSeries?.[seriesIndex];
    if (series && Array.isArray(series.data)) {
        return { seriesIndex, dataPointIndex, seriesName: series?.name, dataPoint: series.data[dataPointIndex] };
    }
    const idx = dataPointIndex >= 0 ? dataPointIndex : seriesIndex;
    return { index: idx, dataPoint: { label: w?.config?.labels?.[idx], value: allSeries?.[idx] } };
};

interface IUseDataPointClick {
    events: { dataPointSelection: (event: any, chartContext: any, config: any) => void };
    dataPoint: IDataPointClick | null;
    reset: () => void;
}

const useDataPointClick = (onSelect?: (d: IDataPointClick) => void): IUseDataPointClick => {
    const [dataPoint, setDataPoint] = useState<IDataPointClick | null>(null);

    const events = useMemo(() => ({
        dataPointSelection: (_event: any, _chartContext: any, config: any) => {
            const d = extractDataPoint(config);
            setDataPoint(d);
            onSelect?.(d);
        }
    }), [onSelect]);

    const reset = () => setDataPoint(null);

    return { events, dataPoint, reset };
};

export { useDataPointClick, extractDataPoint };
export type { IDataPointClick, IUseDataPointClick };
