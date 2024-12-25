import { DataConsumer } from "@palmyralabs/ts-utils";
import { IChartConsumerOptions } from "../../chart/dataAccessor/types";

import { ChartConsumerGenerator, IDataTransformOptions, ISeries } from "../types";

const getCategoryAxisChartConsumer: ChartConsumerGenerator = (options: IChartConsumerOptions,
    props: IDataTransformOptions): DataConsumer<any, any> => {
    const { seriesOptions } = props || {};
    const xKeyAccessor = options.xKeyAccessor;
    const yKeyAccessors = options.yKeyAccessors;

    var series: ApexAxisChartSeries = [];
    const categories = [];

    const initialize = () => {
        yKeyAccessors.forEach((y, i) => {
            const yLabel = options.yLabelAccessors?.[i];
            const baseData = seriesOptions?.[i] || {}
            const arrayData = [];
            var seriesData: ISeries = { ...baseData, data: arrayData };
            if (yLabel) {
                const name = yLabel({});
                seriesData.name = name;
            }
            series[i] = seriesData;
        });
    };

    const processRow = (v: any, idx: number, key?: string) => {
        const xValue = xKeyAccessor(v, key);
        yKeyAccessors.forEach((y, i) => {
            const yValue = y(v, key);
            //@ts-ignore
            series[i].data.push(yValue);
        });
        categories.push(xValue);
    }

    const getResult = () => {
        return { series, xaxis: { categories } };
    }

    return { initialize, processRow, getResult }
}

export { getCategoryAxisChartConsumer };