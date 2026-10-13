import DemoCard from "../../layout/DemoCard"
import ScatterChart from "../../components/ScatterChart/ScatterChart"

const ScatterChartPage = () => {
    return (
        <DemoCard title="Scatter Chart" tag="Correlation"
            description="Plot points by two numeric values to reveal the relationship, clustering, or spread between them.">
            <ScatterChart />
        </DemoCard>
    )
}

export default ScatterChartPage
