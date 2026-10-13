import DemoCard from "../../layout/DemoCard"
import SunburstChart, { data } from "../../components/SunburstChart/SunburstChart"

const SunburstChartPage = () => {
    return (
        <DemoCard title="Sunburst Chart" tag="Composition" data={data}
            description="Show a hierarchy as concentric rings, where each ring is a level and each slice is sized by its value.">
            <SunburstChart />
        </DemoCard>
    )
}

export default SunburstChartPage
