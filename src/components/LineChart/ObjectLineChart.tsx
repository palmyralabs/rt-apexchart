
import ReactApexChart from 'react-apexcharts';
import useChart from '../../conveter/useChart';

const ObjectLineChart = () => {
    const { xAxis, yAxis, fillColor } = useChart({
        endpoint: 'data/ObjectData.json',
        options: {
            type: "object", x: 'month', y: 'value',
            // colors: ['#ff0000']
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
            {xAxis.length != 0 && <ReactApexChart options={options} series={options.series} type="line" height={350} width={600} />
            }
        </div>
    );

}
export default ObjectLineChart