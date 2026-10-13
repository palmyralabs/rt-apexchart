import DemoCard from "../../layout/DemoCard"
import BarChart, { data } from "../../components/BarChart/BarChart"

const BarChartPage = () => {
    return (
        <DemoCard title="Bar Chart" tag="Comparison" data={data}
            description="Compare a single measure across discrete categories. Best for ranking and spotting the largest and smallest values.">
            <BarChart />
        </DemoCard>
    )
}

export default BarChartPage
