import DemoCard from "../../layout/DemoCard"
import BoxPlotChart, { data } from "../../components/BoxPlotChart/BoxPlotChart"

const BoxPlotChartPage = () => {
    return (
        <DemoCard title="Box Plot Chart" tag="Statistical" data={data}
            description="Summarise the spread of each group with min, quartiles, median and max in a single mark.">
            <BoxPlotChart />
        </DemoCard>
    )
}

export default BoxPlotChartPage
