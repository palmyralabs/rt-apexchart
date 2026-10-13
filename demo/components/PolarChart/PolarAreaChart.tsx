import { FlexiApexChart } from "../../../src/main";
import { VALUE_TYPES } from "../../util/chartTypeSets";
import { useDataPointClick } from "../../util/useDataPointClick";

const PolarAreaChart = () =>{

    const { dataPointClickEvents, modal } = useDataPointClick();

     return(
        <div id="chart">
            {modal}
            <FlexiApexChart type="polarArea" chartTypes={VALUE_TYPES} transformOptions={{
                xKey: 'month', yKey: 'value',
                yLabel: ["welcome"]
            }}
            stroke= {{
                colors: ['#fff']
            }}
              fill={ {
                opacity: 0.8
              }}
              responsive= {[{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'top'
                  }
                }
              }]}
                data={data} chart={{ events: dataPointClickEvents }} height="350" width="600" />


        </div>
     );
}
export default PolarAreaChart
export { data }

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