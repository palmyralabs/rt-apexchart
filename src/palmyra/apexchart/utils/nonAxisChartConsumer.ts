import { DataConsumer } from "@palmyralabs/ts-utils";
import { IChartConsumerOptions } from "../../chart/dataAccessor/types";

import { IDataTransformOptions } from "../types";

const getNonAxisChartConsumer = (options: IChartConsumerOptions,
    props: IDataTransformOptions): DataConsumer<any, any> => {
    const { enhanceData } = props;
    const xKeyAccessor = options.xKeyAccessor;
    const yKeyAccessors = options.yKeyAccessors;

    const series: any[] = [];
    const labels: any[] = [];

    const initialize = () => {
    };

    const processRow = (v: any, idx: number, key?: string) => {
        const y = yKeyAccessors[0];

        const xValue = xKeyAccessor(v, key);
        const yValue = y(v, key);

        if (enhanceData) {
            const r: any = enhanceData(xValue, yValue, v, 0, idx, key);
            series.push(r.y || yValue);
            labels.push(r.x || xValue);
        } else {
            series.push(yValue);
            labels.push(xValue);
        }
    }

    const getResult = () => {
        return { series, labels }
    }

    return { initialize, processRow, getResult }
}

export default getNonAxisChartConsumer;