
import { FlexiApexChart } from "../../../src/main";


const BarChart = () => {

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
                chart={{
                    events: {
                        legendClick: function (event: any) {
                            console.log("legend", event)
                        },
                        xAxisLabelClick: function (event: any) {
                            console.log("x", event)
                        },
                        selection: function (event: any) {
                            console.log("selection", event)
                        },
                        animationEnd: function (event: any) {
                            console.log("animation", event)

                        },
                        beforeMount: function (event: any) {
                            console.log("beforeMount", event)
                        },
                        click: handleClick,
                    },

                }}
                plotOptions={{
                    bar: {
                        borderRadius: 10,
                        columnWidth: '50%',
                        distributed: true,
                        borderRadiusApplication: 'end'
                    }
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
                fill={{
                    type: 'gradient',

                    gradient: {
                        shade: 'light',
                        type: "horizontal",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 0.85,
                        opacityTo: 0.85,
                        stops: [50, 0, 100],
                        // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    },
                }
                }
                data={data} type="bar" height="350" width="600" />
        </div>
    );

}
export default BarChart


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