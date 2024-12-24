import { FlexiApexChart } from "../../../src/main";



const DoughnutChart = () => {

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'month', yKey: 'value',
                yLabel: ["welcome"]
            }}
                responsive={[{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
                }
                data={data} type="donut" height="350" width="600" />


        </div>
    );
}
export default DoughnutChart


const data = [
    {
        "value": 10,
        "month": "January"
    },
    {
        "value": 41,
        "month": "February"
    },
    {
        "value": 35,
        "month": "March"
    },
    {
        "value": 51,
        "month": "April"
    },
    {
        "value": 49,
        "month": "May"
    },
    {
        "value": 62,
        "month": "June"
    },
    {
        "value": 69,
        "month": "JUly"
    },
    {
        "value": 91,
        "month": "August"
    }
]