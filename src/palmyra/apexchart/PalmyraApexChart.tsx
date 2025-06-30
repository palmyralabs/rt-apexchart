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

    const [data, onData] = useState(null);

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

    if (data === null) {
        return <div>Loading...</div>;
    }

    const noData = {
        text: 'No Data Available',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
            color: 'rgba(var(--dark-color-rgb),0.5)',
            fontSize: '22px',
            fontFamily: undefined
        }
    }

    const chartOptions: any = {
        ...options,
        noData
    }

    return (
        data.length !== 0 ? <FlexiApexChart {...options} data={data} /> :
            <FlexiApexChart {...chartOptions} data={[]} />)
}

export { PalmyraApexChart }