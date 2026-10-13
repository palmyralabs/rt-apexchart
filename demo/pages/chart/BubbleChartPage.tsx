import DemoCard from "../../layout/DemoCard"
import BubbleChart from "../../components/BubbleChart/BubbleChart"

const BubbleChartPage = () => {
    return (
        <DemoCard title="Bubble Chart" tag="Correlation"
            description="Extend a scatter plot with a third dimension encoded as bubble size for richer comparison.">
            <BubbleChart />
        </DemoCard>
    )
}

export default BubbleChartPage
