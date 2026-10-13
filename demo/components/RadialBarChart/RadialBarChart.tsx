import { FlexiApexChart } from "../../../src/main";
import { useDataPointClick } from "../../util/useDataPointClick";

const RadialBarChart = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart">
            {modal}
            <FlexiApexChart transformOptions={{
                xKey: 'label', yKey: 'value'
            }}
                data={data} type="radialBar"
                chart={{ events: dataPointClickEvents }}
                plotOptions={{
                    radialBar: {
                        dataLabels: {
                            total: { show: true, label: 'Total' }
                        }
                    }
                }}
                legend={{ show: true, position: "bottom" }}
                height="350" width="500"
            />
        </div>
    );

}
export default RadialBarChart
export { data }

const data = [
    { label: 'Desktop', value: 76 },
    { label: 'Mobile', value: 58 },
    { label: 'Tablet', value: 42 },
    { label: 'Other', value: 24 }
]
