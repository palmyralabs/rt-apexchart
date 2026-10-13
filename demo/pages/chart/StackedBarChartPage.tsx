import DemoCard from "../../layout/DemoCard"
import StackedBarChart from "../../components/StackedBarChart/StackedBarChart"

const StackedBarChartPage = () => {
    return (
        <DemoCard title="Stacked Bar Chart" tag="Comparison"
            description="Stack multiple series into a single bar to show part-to-whole totals per category.">
            <StackedBarChart />
        </DemoCard>
    )
}

export default StackedBarChartPage
