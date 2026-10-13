import DemoCard from "../../layout/DemoCard"
import StackedBarChart, { data } from "../../components/StackedBarChart/StackedBarChart"

const StackedBarChartPage = () => {
    return (
        <DemoCard title="Stacked Bar Chart" tag="Comparison" data={data}
            description="Stack multiple series into a single bar to show part-to-whole totals per category.">
            <StackedBarChart />
        </DemoCard>
    )
}

export default StackedBarChartPage
