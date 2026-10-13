import DemoCard from "../../layout/DemoCard"
import StreamgraphChart, { data } from "../../components/StreamgraphChart/StreamgraphChart"

const StreamgraphChartPage = () => {
    return (
        <DemoCard title="Streamgraph" tag="Trend" data={data}
            description="A smooth stacked area that shows how several categories flow and shift in share over time.">
            <StreamgraphChart />
        </DemoCard>
    )
}

export default StreamgraphChartPage
