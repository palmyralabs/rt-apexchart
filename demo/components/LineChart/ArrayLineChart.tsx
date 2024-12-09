
import ReactApexChart from 'react-apexcharts';
import useChart from '../../../src/palmyra/apexchart/conveter/useChart';

const ArrayLineChart = () => {
    const { xAxis, yAxis, fillColor } = useChart({
        endpoint: '/data/ArrayData.json',
        options: {
            type: "array", x: 'month', y: 'value',
        }
    },)

    console.log("xAxis", xAxis)
    console.log("yAxis", yAxis)

    var options: any = {
        series: [{
            name: "Desktops",
            data: yAxis
        }],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], 
                opacity: 0.5
            },
        },
        xaxis: {
            categories: xAxis
        },
        colors: fillColor
    };
    return (
        <div id="chart">
             <ReactApexChart options={options} series={options.series} type="line" height={350} width={600} />
        </div>
    );

}
export default ArrayLineChart