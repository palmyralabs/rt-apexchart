import DemoCard from "../../layout/DemoCard"
import ChartScale, { data } from "../../components/ChartScale/ChartScale"

const ChartScalePage = () => {
    return (
        <DemoCard title="Chart Scale" tag="Axis" data={data}
            description="Compare how the same wide-ranging data reads on a linear versus a logarithmic y-axis. On a linear scale the small values vanish next to the large ones; a logarithmic scale keeps every value legible.">
            <ChartScale />
        </DemoCard>
    )
}

export default ChartScalePage
