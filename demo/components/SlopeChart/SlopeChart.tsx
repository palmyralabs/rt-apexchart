import { FlexiApexChart } from "../../../src/main";
import { MULTI_TYPES } from "../../util/chartTypeSets";
import { useDataPointClick } from "../../util/useDataPointClick";

const SlopeChart = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart">
            {modal}
            <FlexiApexChart type="line" chartTypes={MULTI_TYPES} transformOptions={{
                xKey: 'period', yKey: ['teamA', 'teamB', 'teamC', 'teamD']
            }}
                data={data}
                chart={{ toolbar: { show: false }, events: dataPointClickEvents }}
                stroke={{ curve: 'straight', width: 2 }}
                markers={{ size: 6 }}
                dataLabels={{ enabled: true }}
                legend={{ position: "top" }}
                seriesOptions={[{ name: 'Team A' }, { name: 'Team B' }, { name: 'Team C' }, { name: 'Team D' }]}
                height="350" width="700"
            />
        </div>
    );

}
export default SlopeChart
export { data }

const data = [
    { period: '2023', teamA: 30, teamB: 45, teamC: 20, teamD: 60 },
    { period: '2024', teamA: 55, teamB: 35, teamC: 50, teamD: 42 }
]
