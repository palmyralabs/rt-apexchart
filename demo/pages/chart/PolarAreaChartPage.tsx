import DemoCard from "../../layout/DemoCard"
import PolarAreaChart from "../../components/PolarChart/PolarAreaChart"

const PolarAreaChartPage = () => {
    return (
        <DemoCard title="Polar Area Chart" tag="Composition"
            description="Compare categories drawn as segments where each segment radius encodes its value.">
            <PolarAreaChart />
        </DemoCard>
    )
}

export default PolarAreaChartPage
