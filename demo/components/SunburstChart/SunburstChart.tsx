import { ReactApexChart } from "../../../src/main";
import 'apexcharts/sunburst';
import { useDataPointClick } from "../../util/useDataPointClick";

const SunburstChart = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart">
            {modal}
            <ReactApexChart type="sunburst" height="420" width="600"
                series={[{ data }]}
                options={{
                    chart: { events: dataPointClickEvents },
                    colors: ['#0c77e3', '#14b8a6', '#f59e0b'],
                    legend: { position: 'bottom' },
                    plotOptions: { sunburst: { innerSize: '25%', borderRadius: 4, spacing: 1 } },
                    stroke: { width: 1, colors: ['#fff'] },
                    dataLabels: { enabled: true }
                }}
            />
        </div>
    );

}
export default SunburstChart
export { data }

const data = [
    {
        x: 'Mobile', y: 55, children: [
            {
                x: 'iOS', y: 30, children: [
                    { x: 'iOS 17', y: 18 },
                    { x: 'iOS 16', y: 9 },
                    { x: 'iOS 15', y: 3 }
                ]
            },
            { x: 'Android', y: 23 },
            { x: 'Other', y: 2 }
        ]
    },
    {
        x: 'Desktop', y: 33, children: [
            { x: 'Windows', y: 20 },
            { x: 'macOS', y: 10 },
            { x: 'Linux', y: 3 }
        ]
    },
    {
        x: 'Tablet', y: 12, children: [
            { x: 'iPadOS', y: 8 },
            { x: 'Android', y: 4 }
        ]
    }
]
