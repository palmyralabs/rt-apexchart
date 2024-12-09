import ReactApexChart from "react-apexcharts";
import moment from "moment";
import UseRangeChart from "../../RangeConverter/UseRangeChart";



const ArrayRangeChart = () => {
    const { chartData} = UseRangeChart({
        endpoint: '/rangeData/RangeArrayData.json',
        options: {
            type: "array", x: 'name', y1: 'fromDate', y2: 'toDate',
            colors: ['#9acd32', '#c71585', '#8a2be2', '#ff00ff', '#ff6347', '#48d1cc', '#4169e1', '#9acd32', '#663399']
        }
    },)
    
    const options: any = {
        series: [{
            data: chartData
        }],

        chart: {
            height: 350,
            type: 'rangeBar',
            redrawOnWindowResize: true
        },
        plotOptions: {
            bar: {
                horizontal: true,
                distributed: true,
                dataLabels: {
                    hideOverflowingLabels: false
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val: any, opts: any) {
                var label = opts.w.globals.labels[opts.dataPointIndex]
                var a = moment(val[0])
                var b = moment(val[1])
                var diff = b.diff(a, 'days')
                return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
            },
            style: {
                colors: ['#f3f4f5', '#fff']
            }
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            show: false
        },
        grid: {
            row: {
                colors: ['#f3f4f5', '#fff'],
                opacity: 1
            }
        }
    }
    return (
        <div id="chart">
            <ReactApexChart options={options} series={options.series} type="rangeBar" height={350} width={600} />
            {/* <button onClick={refresh}>Refresh Chart</button> */}
        </div>
    );
}
export default ArrayRangeChart