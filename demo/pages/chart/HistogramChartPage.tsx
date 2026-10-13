import DemoCard from "../../layout/DemoCard"
import HistogramChart, { data } from "../../components/HistogramChart/HistogramChart"

const HistogramChartPage = () => {
    return (
        <DemoCard title="Histogram" tag="Financial & Statistical" data={data}
            description="Show the distribution of a measure by counting how many values fall into each range or bin.">
            <HistogramChart />
        </DemoCard>
    )
}

export default HistogramChartPage
