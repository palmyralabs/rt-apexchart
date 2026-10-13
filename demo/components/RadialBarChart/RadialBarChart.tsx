import { FlexiApexChart } from "../../../src/main";

const RadialBarChart = () => {

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'label', yKey: 'value'
            }}
                data={data} type="radialBar"
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
