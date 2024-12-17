import { useEffect, useState } from "react";
import { RemoteQueryOptions } from "../chart/query/types";
import { FlexiApexChart } from "./FlexiApexChart";
import { FlexiApexChartProps } from "./types";
import { useChartQuery } from "../chart/query/useChartQuery";


interface ReactApexChartProps extends Omit<FlexiApexChartProps, 'data'>, RemoteQueryOptions { }

const PalmyraApexChart = (props: ReactApexChartProps) => {
    const {
        storeFactory, endPoint,
        endPointVars, filter, sortOrder, ...options
    } = props;

    const [data, onData] = useState([]);

    const { fetch, setFilter, setEndPointVars } = useChartQuery(props, {
        onData
    });

    useEffect(() => {
        setFilter(filter);
    }, [filter]);

    useEffect(() => {
        setEndPointVars(endPointVars);
    }, [endPointVars]);

    useEffect(() => {
        fetch()
    }, [endPoint, filter]);

    return <FlexiApexChart {...options} data={data} />
}

export { PalmyraApexChart }