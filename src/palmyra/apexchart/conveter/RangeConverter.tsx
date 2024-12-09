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

function RangeConverter({ endpoint, options }: UseChartProps) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(endpoint).then((response) => {
            // console.log("r",response.data.result)
            setData(response.data.result);
        })
    }, [endpoint]);

    console.log("g", data)
    console.log("x", options.x)


    // const chartData = (data: any) => {
    //     return data.map((item: any, index: number) => {
    //         const xAxis = item[options.x];
    //         const yAxis = [(moment(data[options.y1]).toDate().getTime()), (moment(data[options.y2]).toDate().getTime())];
    //         const fillColor = options.colors[index % options.colors.length];
    //         return { xAxis, yAxis, fillColor };
    //     });
    // };

     
    const chartData = data.map((item, index: number) => {
        return {
            x: item[options.x],
            y: [(moment(item[options.y1]).toDate().getTime()), (moment(item[options.y2]).toDate().getTime())],
            colors: options.colors[index % options.colors.length]
        };
    });

    console.log("chartData:", chartData);
    return { chartData };


}

export default RangeConverter;
