import DemoCard from "../../layout/DemoCard"
import CandlestickChart, { data } from "../../components/CandlestickChart/CandlestickChart"

const CandlestickChartPage = () => {
    return (
        <DemoCard title="Candlestick Chart" tag="Financial" data={data}
            description="Show open, high, low and close values per period, the standard view for price movement.">
            <CandlestickChart />
        </DemoCard>
    )
}

export default CandlestickChartPage
