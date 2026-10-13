import DemoCard from "../../layout/DemoCard"
import ArrayLineChart, { data } from "../../components/LineChart/ArrayLineChart"

const LineChartPage = () => {
    return (
        <DemoCard title="Line Chart" tag="Trend" data={data}
            description="Track how a single measure changes across a continuous axis such as time.">
            <ArrayLineChart />
        </DemoCard>
    )
}

export default LineChartPage
