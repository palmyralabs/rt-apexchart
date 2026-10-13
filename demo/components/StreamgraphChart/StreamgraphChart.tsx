import { FlexiApexChart } from "../../../src/main";

const StreamgraphChart = () => {

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'month', yKey: ['productA', 'productB', 'productC', 'productD']
            }}
                data={data} type="area"
                chart={{ stacked: true, toolbar: { show: false } }}
                stroke={{ curve: 'smooth', width: 1 }}
                fill={{ type: 'solid', opacity: 0.85 }}
                dataLabels={{ enabled: false }}
                legend={{ position: "top" }}
                seriesOptions={[{ name: 'Product A' }, { name: 'Product B' }, { name: 'Product C' }, { name: 'Product D' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default StreamgraphChart
export { data }

const data = [
    { month: 'Jan', productA: 20, productB: 14, productC: 8, productD: 12 },
    { month: 'Feb', productA: 28, productB: 20, productC: 12, productD: 16 },
    { month: 'Mar', productA: 24, productB: 32, productC: 18, productD: 10 },
    { month: 'Apr', productA: 36, productB: 26, productC: 22, productD: 20 },
    { month: 'May', productA: 30, productB: 40, productC: 14, productD: 28 },
    { month: 'Jun', productA: 45, productB: 30, productC: 26, productD: 18 },
    { month: 'Jul', productA: 38, productB: 48, productC: 20, productD: 32 },
    { month: 'Aug', productA: 52, productB: 36, productC: 30, productD: 24 }
]
