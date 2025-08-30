import { forwardRef, useEffect, useImperativeHandle, useRef, useState, MutableRefObject } from "react";
import { RemoteQueryOptions } from "../chart/query/types";
import { FlexiApexChart } from "./FlexiApexChart";
import { FlexiApexChartProps, IPalmyraApexChart } from "./types";
import { useChartQuery } from "../chart/query/useChartQuery";


interface ReactApexChartProps extends Omit<FlexiApexChartProps, 'data'>, RemoteQueryOptions { }

const PalmyraApexChart = forwardRef(function PalmyraApexChart(props: ReactApexChartProps, ref: MutableRefObject<IPalmyraApexChart>) {
    const {
        storeFactory, endPoint,
        endPointVars, filter, sortOrder, ...options
    } = props;

    const [data, onData] = useState(null);

    const { fetch, setFilter, setEndPointVars } = useChartQuery(props, {
        onData
    });

    const currentRef = ref ? ref : useRef<IPalmyraApexChart>(null);

    useImperativeHandle(currentRef, () => {
        return {
            setEndPointOptions(d: any) {
                setEndPointVars(d)
            },
            setFilter(f) {
                setFilter(f);
            }
        }
    }, [])

    useEffect(() => {
        fetch()
    }, []);

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
        data?.length !== 0 ? <FlexiApexChart {...options} data={data} /> :
            <FlexiApexChart {...chartOptions} data={[]} />)
});

export { PalmyraApexChart }