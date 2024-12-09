import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

interface ChartOptions {
    type: string;
    x: string;
    y1: string;
    y2: string
    colors?: any
}

interface UseChartProps {
    endpoint: string;
    options: ChartOptions;
}

function RangeObjectConverter({ endpoint, options }: UseChartProps) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(endpoint).then((response) => {
            // console.log("r",response.data.result)
            setData(response.data.result);
        })
    }, [endpoint]);


    console.log
    const chartData = Object.values(data).map((item, index: number) => {
        return {
            x: item[options.x],
            y: [(moment(item[options.y1]).toDate().getTime()), (moment(item[options.y2]).toDate().getTime())],
            colors: options.colors[index % options.colors.length]
        };
    });


    console.log("chartData:", chartData);
    return { chartData };


}

export default RangeObjectConverter;
