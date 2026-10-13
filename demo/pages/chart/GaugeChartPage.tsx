import DemoCard from "../../layout/DemoCard"
import GaugeChart, { data } from "../../components/GaugeChart/GaugeChart"

const GaugeChartPage = () => {
    return (
        <DemoCard title="Gauge Chart" tag="Composition" data={data}
            description="Show a single value against its range on a semicircular dial, useful for KPIs and progress.">
            <GaugeChart />
        </DemoCard>
    )
}

export default GaugeChartPage
