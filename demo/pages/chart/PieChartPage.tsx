import DemoCard from "../../layout/DemoCard"
import PieChart from "../../components/PieChart/PieChart"

const PieChartPage = () => {
    return (
        <DemoCard title="Pie Chart" tag="Composition"
            description="Show how a single total breaks down into proportional slices.">
            <PieChart />
        </DemoCard>
    )
}

export default PieChartPage
