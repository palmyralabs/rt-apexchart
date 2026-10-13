import DemoCard from "../../layout/DemoCard"
import DoughnutChart from "../../components/DonutChart/DoughnutChart"

const DoughnutChartPage = () => {
    return (
        <DemoCard title="Doughnut Chart" tag="Composition"
            description="Show proportions of a total with a center cutout that keeps the slices easy to read.">
            <DoughnutChart />
        </DemoCard>
    )
}

export default DoughnutChartPage
