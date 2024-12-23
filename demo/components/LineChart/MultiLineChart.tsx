import { FlexiApexChart } from "../../../src/main"

const MultiLineChart = () =>{
 
    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'month', yKey: ['value','min'], 
                yLabel: ["welcome"]
            }}
            legend={{ position: "top" }}
            seriesOptions={[
                { name: 'Value' },
                { name: 'Minimum' },
                
            ]}
            dataLabels={{
                enabled: true
            }}
                data={data} type="line" height="350" width="900" />
        </div>
    );

}

export default MultiLineChart

const data = [
    {
        "value": 8,
        "min": 4,
        "month": "January"
    },
    {
        "value": 4,
        "min": 6,
        "month": "February"
    },
    {
        "value": 6,
        "min": 9,
        "month": "March"
    },
    {
        "value": 3,
        "min": 9,
        "month": "April"
    }
]