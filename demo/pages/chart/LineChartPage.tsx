import DemoCard from "../../layout/DemoCard"
import ArrayLineChart from "../../components/LineChart/ArrayLineChart"

const LineChartPage = () => {
    return (
        <DemoCard title="Line Chart" tag="Trend"
            description="Track how a single measure changes across a continuous axis such as time.">
            <ArrayLineChart />
        </DemoCard>
    )
}

export default LineChartPage
