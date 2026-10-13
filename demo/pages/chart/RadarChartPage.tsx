import DemoCard from "../../layout/DemoCard"
import RadarChart, { data } from "../../components/RadarChart/RadarChart"

const RadarChartPage = () => {
    return (
        <DemoCard title="Radar Chart" tag="Composition" data={data}
            description="Compare several variables at once on shared radial axes to profile each series.">
            <RadarChart />
        </DemoCard>
    )
}

export default RadarChartPage
