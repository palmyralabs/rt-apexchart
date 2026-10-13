import DemoCard from "../../layout/DemoCard"
import ScatterChart, { data } from "../../components/ScatterChart/ScatterChart"

const ScatterChartPage = () => {
    return (
        <DemoCard title="Scatter Chart" tag="Correlation" data={data}
            description="Plot points by two numeric values to reveal the relationship, clustering, or spread between them.">
            <ScatterChart />
        </DemoCard>
    )
}

export default ScatterChartPage
