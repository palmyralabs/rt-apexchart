import DemoCard from "../../layout/DemoCard"
import GroupedBarChart, { data } from "../../components/GroupedBarChart/GroupedBarChart"

const GroupedBarChartPage = () => {
    return (
        <DemoCard title="Grouped Bar Chart" tag="Comparison" data={data}
            description="Place several series side by side within each category to compare them directly.">
            <GroupedBarChart />
        </DemoCard>
    )
}

export default GroupedBarChartPage
