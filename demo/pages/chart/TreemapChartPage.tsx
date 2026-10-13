import DemoCard from "../../layout/DemoCard"
import TreemapChart, { data } from "../../components/TreemapChart/TreemapChart"

const TreemapChartPage = () => {
    return (
        <DemoCard title="Treemap Chart" tag="Composition" data={data}
            description="Show how a total divides into nested rectangles sized by value, good for ranking many categories at once.">
            <TreemapChart />
        </DemoCard>
    )
}

export default TreemapChartPage
