import DemoCard from "../../layout/DemoCard"
import MultiLineChart from "../../components/LineChart/MultiLineChart"

const MultiLineChartPage = () => {
    return (
        <DemoCard title="Multi Line Chart" tag="Trend"
            description="Compare the trends of several measures on a shared axis to see how they move together.">
            <MultiLineChart />
        </DemoCard>
    )
}

export default MultiLineChartPage
