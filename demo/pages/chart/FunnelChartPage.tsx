import DemoCard from "../../layout/DemoCard"
import FunnelChart, { data } from "../../components/FunnelChart/FunnelChart"

const FunnelChartPage = () => {
    return (
        <DemoCard title="Funnel Chart" tag="Composition" data={data}
            description="Track how a population narrows across the stages of a process, such as a conversion or sales pipeline.">
            <FunnelChart />
        </DemoCard>
    )
}

export default FunnelChartPage
