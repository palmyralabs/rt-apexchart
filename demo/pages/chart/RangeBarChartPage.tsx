import DemoCard from "../../layout/DemoCard"
import RangeBarChart, { data } from "../../components/RangeBarChart/RangeBarChart"

const RangeBarChartPage = () => {
    return (
        <DemoCard title="Range Bar Chart" tag="Comparison" data={data}
            description="Plot a start-to-end range per category, useful for timelines and schedules.">
            <RangeBarChart />
        </DemoCard>
    )
}

export default RangeBarChartPage
