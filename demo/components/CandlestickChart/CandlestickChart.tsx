import { FlexiApexChart } from "../../../src/main";

const CandlestickChart = () => {

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'date',
                yKey: (d: any) => [d.open, d.high, d.low, d.close]
            }}
                data={data} type="candlestick"
                xaxis={{ type: 'category' }}
                yaxis={{ tooltip: { enabled: true } }}
                seriesOptions={[{ name: 'Price' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default CandlestickChart

const data = [
    { date: 'Mon', open: 51, high: 58, low: 49, close: 55 },
    { date: 'Tue', open: 55, high: 60, low: 53, close: 54 },
    { date: 'Wed', open: 54, high: 56, low: 46, close: 48 },
    { date: 'Thu', open: 48, high: 52, low: 45, close: 51 },
    { date: 'Fri', open: 51, high: 63, low: 50, close: 61 },
    { date: 'Sat', open: 61, high: 66, low: 58, close: 59 },
    { date: 'Sun', open: 59, high: 62, low: 54, close: 57 }
]
