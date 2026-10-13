import { FlexiApexChart } from "../../../src/main";
import { MULTI_TYPES } from "../../util/chartTypeSets";
import { useDataPointClick } from "../../util/useDataPointClick";

const MultiLineChart = () =>{

    const { dataPointClickEvents, modal } = useDataPointClick();
 
    return (
        <div id="chart">
            {modal}
            <FlexiApexChart type="line" chartTypes={MULTI_TYPES} transformOptions={{
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
                data={data} chart={{ events: dataPointClickEvents }} height="350" width="900" />
        </div>
    );

}

export default MultiLineChart
export { data }

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