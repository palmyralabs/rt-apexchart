import DemoCard from "../../layout/DemoCard"
import RangeBarChart from "../../components/RangeBarChart/RangeBarChart"

const RangeBarChartPage = () => {
    return (
        <DemoCard title="Range Bar Chart" tag="Comparison"
            description="Plot a start-to-end range per category, useful for timelines and schedules.">
            <RangeBarChart />
        </DemoCard>
    )
}

export default RangeBarChartPage
