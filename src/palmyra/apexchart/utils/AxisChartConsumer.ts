import { DataConsumer } from "@palmyralabs/ts-utils";
import { IChartConsumerOptions } from "../../chart/dataAccessor/types";


type seriesDataType = ApexAxisChartSeries[0];
type dataType = ApexAxisChartSeries[0]["data"][0];

const getChartConsumer = (options: IChartConsumerOptions): DataConsumer<any, any> => {
    const xKeyAccessor = options.xKeyAccessor;
    const yKeyAccessors = options.yKeyAccessors;

    var result: ApexAxisChartSeries = [];
    const initialize = () => {
        yKeyAccessors.forEach((y, i) => {
            const yLabel = options.yLabelAccessors?.[i];
            var seriesData: seriesDataType = { data: [] };
            if (yLabel) {
                const name = yLabel({});
                seriesData.name = name;
            }
            result[i] = seriesData;
        });
    };

    const processRow = (v: any, _idx: number, key?: string) => {
        const xValue = xKeyAccessor(v, key);
        yKeyAccessors.forEach((y, i) => {
            const yValue = y(v, key);
            const data: dataType = { x: xValue, y: yValue };
            //@ts-ignore
            result[i].data.push(data);
        });
    }

    const getResult = () => {
        return result;
    }

    return { initialize, processRow, getResult }
}

export { getChartConsumer }