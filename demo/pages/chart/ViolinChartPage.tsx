import DemoCard from "../../layout/DemoCard"
import ViolinChart, { data } from "../../components/ViolinChart/ViolinChart"

const ViolinChartPage = () => {
    return (
        <DemoCard title="Violin Chart" tag="Financial & Statistical" data={data}
            description="Show the full distribution shape of each group through a mirrored density curve, richer than a box plot.">
            <ViolinChart />
        </DemoCard>
    )
}

export default ViolinChartPage
