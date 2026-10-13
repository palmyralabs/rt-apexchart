import { FlexiApexChart } from "../../../src/main";
import { useDataPointClick } from "../../util/useDataPointClick";

const FunnelChart = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart">
            {modal}
            <FlexiApexChart transformOptions={{
                xKey: 'stage', yKey: 'count'
            }}
                data={data} type="bar"
                chart={{ toolbar: { show: false }, events: dataPointClickEvents }}
                plotOptions={{
                    bar: {
                        horizontal: true,
                        barHeight: '72%',
                        isFunnel: true,
                        distributed: true,
                        borderRadius: 0
                    }
                }}
                dataLabels={{
                    enabled: true,
                    formatter: (val: number, opt: any) =>
                        opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
                }}
                legend={{ show: false }}
                seriesOptions={[{ name: 'Users' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default FunnelChart
export { data }

const data = [
    { stage: 'Visits', count: 5200 },
    { stage: 'Sign ups', count: 3400 },
    { stage: 'Trials', count: 2100 },
    { stage: 'Paid', count: 1200 },
    { stage: 'Renewals', count: 700 }
]
