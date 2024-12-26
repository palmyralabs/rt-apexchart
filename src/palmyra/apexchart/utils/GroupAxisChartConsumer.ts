import { DataConsumer } from "@palmyralabs/ts-utils";
import { IChartConsumerOptions } from "../../chart/dataAccessor/types";

import { ChartConsumerGenerator, IDataTransformOptions, ISeries, ISeriesDataType } from "../types";

const getGroupAxisChartConsumer: ChartConsumerGenerator = (options: IChartConsumerOptions,
    props: IDataTransformOptions): DataConsumer<any, any> => {
    const { seriesOptions, enhanceData } = props || {};
    const xKeyAccessor = options.xKeyAccessor;
    const yKeyAccessors = options.yKeyAccessors;
    const groupKey = options.groupKey;

    var series: ApexAxisChartSeries = [];
    var oCategories = {};

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


        if (oCategories[v.year]) {
            const d = oCategories[v.year];
            if (d[v.name]) {
                d[v.name].push(v.value);
            } else
                d[v.name] = [v.value];

        } else {
            const data = { [v.name]: [v.value] };
            oCategories[v.year] = data;
        }
    }

    const getResult = () => {
        console.log(oCategories);
        const categories = Object.keys(oCategories)
        const series = Object.keys(oCategories[Object.keys(oCategories)[0]]).map(name => ({
            name,
            data: Object.keys(oCategories).map(value => oCategories[value][name][0])
        }));
        console.log("output", series);

        // const d = Object.values(oCategories).map(value =>value ['Marine Sprite']).flat();
        // const data = Object.values(oCategories).map(values =>values ['Striking Calf']).flat();

        //    const d = Object.keys(oCategories[Object.keys (oCategories)[0]])
        //    console.log("d",d)

        // console.log("val",d)
        // console.log("Val",data)
        return { xaxis: { categories }, yaxis: series };

    }

    return { initialize, processRow, getResult }
}

export default getGroupAxisChartConsumer;