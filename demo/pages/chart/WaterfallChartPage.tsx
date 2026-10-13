import DemoCard from "../../layout/DemoCard"
import WaterfallChart, { data } from "../../components/WaterfallChart/WaterfallChart"

const WaterfallChartPage = () => {
    return (
        <DemoCard title="Waterfall Chart" tag="Comparison" data={data}
            description="Show how an opening value grows and shrinks through a sequence of increases and decreases to a closing total.">
            <WaterfallChart />
        </DemoCard>
    )
}

export default WaterfallChartPage
