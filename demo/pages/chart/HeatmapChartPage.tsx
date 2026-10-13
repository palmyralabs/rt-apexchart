import DemoCard from "../../layout/DemoCard"
import HeatmapChart from "../../components/HeatmapChart/HeatmapChart"

const HeatmapChartPage = () => {
    return (
        <DemoCard title="Heatmap Chart" tag="Correlation"
            description="Show intensity across two categories using colour, ideal for spotting patterns in a matrix of values.">
            <HeatmapChart />
        </DemoCard>
    )
}

export default HeatmapChartPage
