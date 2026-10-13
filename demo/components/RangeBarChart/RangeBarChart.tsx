import { FlexiApexChart } from "../../../src/main";
import { useDataPointClick } from "../../util/useDataPointClick";

const RangeBarChart = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart">
            {modal}
            <FlexiApexChart transformOptions={{
                xKey: 'task',
                yKey: (d: any) => [d.start, d.end]
            }}
                data={data} type="rangeBar"
                chart={{ events: dataPointClickEvents }}
                plotOptions={{ bar: { horizontal: true, borderRadius: 4, barHeight: '45%' } }}
                dataLabels={{ enabled: true }}
                seriesOptions={[{ name: 'Phase' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default RangeBarChart
export { data }

const data = [
    { task: 'Research', start: 1, end: 5 },
    { task: 'Design', start: 4, end: 9 },
    { task: 'Development', start: 8, end: 18 },
    { task: 'Testing', start: 16, end: 22 },
    { task: 'Launch', start: 21, end: 24 }
]
