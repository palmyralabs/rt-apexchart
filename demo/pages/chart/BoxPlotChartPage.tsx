import DemoCard from "../../layout/DemoCard"
import BoxPlotChart from "../../components/BoxPlotChart/BoxPlotChart"

const BoxPlotChartPage = () => {
    return (
        <DemoCard title="Box Plot Chart" tag="Statistical"
            description="Summarise the spread of each group with min, quartiles, median and max in a single mark.">
            <BoxPlotChart />
        </DemoCard>
    )
}

export default BoxPlotChartPage
