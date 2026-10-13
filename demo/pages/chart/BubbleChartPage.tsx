import DemoCard from "../../layout/DemoCard"
import BubbleChart, { data } from "../../components/BubbleChart/BubbleChart"

const BubbleChartPage = () => {
    return (
        <DemoCard title="Bubble Chart" tag="Correlation" data={data}
            description="Extend a scatter plot with a third dimension encoded as bubble size for richer comparison.">
            <BubbleChart />
        </DemoCard>
    )
}

export default BubbleChartPage
