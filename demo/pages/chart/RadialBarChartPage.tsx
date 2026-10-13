import DemoCard from "../../layout/DemoCard"
import RadialBarChart from "../../components/RadialBarChart/RadialBarChart"

const RadialBarChartPage = () => {
    return (
        <DemoCard title="Radial Bar Chart" tag="Composition"
            description="Show progress or share of several measures as concentric circular gauges.">
            <RadialBarChart />
        </DemoCard>
    )
}

export default RadialBarChartPage
