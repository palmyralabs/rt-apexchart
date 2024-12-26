import { DataConsumer } from "@palmyralabs/ts-utils";
import { IChartConsumerOptions } from "../../chart/dataAccessor/types";

import { ChartConsumerGenerator, IDataTransformOptions } from "../types";
import { extend } from "./ObjectUtils";

const getGroupAxisChartConsumer: ChartConsumerGenerator = (options: IChartConsumerOptions,
    props: IDataTransformOptions): DataConsumer<any, any> => {
    const { seriesOptions } = props || {};

    const xKeyAccessor = options.xKeyAccessor;
    const yKeyAccessor = options.yKeyAccessors[0];
    const groupKey = options.groupKey;

    var oCategories = {};
    const categories = [];
    var ks = {};

    const initialize = () => { };


    const processRow = (data: any, idx: number, key?: string) => {
        const x: any = xKeyAccessor(data, key);
        const k: any = groupKey(data, key);
        const y = yKeyAccessor(data, key);

        if (oCategories[x]) {
            const d = oCategories[x];
            d[k] = y;
        } else {
            const data = { [k]: y };
            oCategories[x] = data;
            categories.push(x);
        }
        if (!ks[k]) {
            ks[k] = { name: k, data: [] };
        }
    }

    const getResult = () => {

        const kArray = Object.keys(ks);

        Object.entries(oCategories).map(([k, o]) => {
            kArray.map((v) => {
                ks[v].data.push(o[v]);
            })
        });

        const series = Object.values(ks).map((v, idx) => extend(v, seriesOptions[idx]));

        return { series, xaxis: { categories } }
    }

    return { initialize, processRow, getResult }
}

export default getGroupAxisChartConsumer;