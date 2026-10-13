import DemoCard from "../../layout/DemoCard"
import AreaChart from "../../components/AreaChart/AreaChart"

const AreaChartPage = () => {
    return (
        <DemoCard title="Area Chart" tag="Trend"
            description="Track measures over time with a filled line, useful for emphasising volume and comparing periods.">
            <AreaChart />
        </DemoCard>
    )
}

export default AreaChartPage
