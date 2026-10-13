import DemoCard from "../../layout/DemoCard"
import SlopeChart, { data } from "../../components/SlopeChart/SlopeChart"

const SlopeChartPage = () => {
    return (
        <DemoCard title="Slope Chart" tag="Trend" data={data}
            description="Compare how several items changed between two points in time with a line connecting each pair of values.">
            <SlopeChart />
        </DemoCard>
    )
}

export default SlopeChartPage
