
import { FlexiApexChart } from "../../../src/main";


const PieChart = () => {

    function handleClick(_event: any, _chartContext: any, opts: any) {
        console.log("seriesIndex", opts.config.series[opts.seriesIndex])
        console.log("name", opts.config.series[opts.seriesIndex].name)
        console.log("Datapoint", opts.config.series[opts.seriesIndex].data[opts.dataPointIndex])
    }
    return (

        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'month', yKey: 'value',
                yLabel: ["welcome"]
            }}
                annotations={{
                    points: [{
                        x: 'Bananas',
                        seriesIndex: 0,
                        label: {
                            borderColor: '#775DD0',
                            offsetY: 0,
                            style: {
                                color: '#fff',
                                background: '#775DD0',
                                cssClass: 'apexcharts-point-annotation-label'
                            },

                        }
                    }]
                }}

                legend={{
                    show: true,
                    position: "right"
                }}
                title={{
                    text: 'Bar Chart',
                    align: 'left',
                    style: {
                        fontWeight: 'bold',
                    }
                }}

                // colors={data.map(d => d.colors)}
                colors={['#9acd32', '#c71585', '#8a2be2', '#ff00ff', '#ff6347', '#48d1cc', '#4169e1', '#9acd32']}

                seriesOptions={
                    [{ name: 'month' },]}

                data={data} type="pie" height="350" width="600" />
        </div>
    );

}
export default PieChart


const data = [
    {
        "value": 10,
        "month": "January",

    },
    {
        "value": 41,
        "month": "February",

    },
    {
        "value": 35,
        "month": "March",

    },
    {
        "value": 51,
        "month": "April",

    },
    {
        "value": 49,
        "month": "May",

    },
    {
        "value": 62,
        "month": "June",

    },
    {
        "value": 69,
        "month": "JUly",


    },
    {
        "value": 91,
        "month": "August",

    }
]