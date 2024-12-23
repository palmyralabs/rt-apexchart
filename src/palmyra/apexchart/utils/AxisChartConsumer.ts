import { DataConsumer } from "@palmyralabs/ts-utils";
import { IChartConsumerOptions } from "../../chart/dataAccessor/types";

import { IDataTransformOptions, ISeries, ISeriesDataType } from "../types";

const getChartConsumer = (options: IChartConsumerOptions,
    props: IDataTransformOptions): DataConsumer<any, any> => {
    const { seriesOptions, enhanceData } = props;
    const xKeyAccessor = options.xKeyAccessor;
    const yKeyAccessors = options.yKeyAccessors;

    var result: ApexAxisChartSeries = [];
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
            result[i] = seriesData;
        });
    };

    const processRow = (v: any, idx: number, key?: string) => {
        const xValue = xKeyAccessor(v, key);
        yKeyAccessors.forEach((y, i) => {
            const yValue = y(v, key);
            var data: ISeriesDataType;

            if (enhanceData) {
                const r = enhanceData(xValue, yValue, v, i, idx, key);
                data = { ...r, x: xValue, y: yValue }
            } else {
                data = { x: xValue, y: yValue };
            }
            //@ts-ignore
            result[i].data.push(data);
        });
    }

    const getResult = () => {
        return { series: result };
    }

    return { initialize, processRow, getResult }
}

export default getChartConsumer;