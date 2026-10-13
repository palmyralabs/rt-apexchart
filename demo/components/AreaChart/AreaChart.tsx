import { FlexiApexChart } from "../../../src/main";

const AreaChart = () => {

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'month', yKey: ['thisYear', 'lastYear']
            }}
                data={data} type="area"
                stroke={{ curve: 'smooth', width: 2 }}
                fill={{ type: 'gradient', gradient: { opacityFrom: 0.5, opacityTo: 0.05 } }}
                legend={{ position: "top" }}
                dataLabels={{ enabled: false }}
                seriesOptions={[{ name: 'This Year' }, { name: 'Last Year' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default AreaChart
export { data }

const data = [
    { month: 'Jan', thisYear: 31, lastYear: 24 },
    { month: 'Feb', thisYear: 40, lastYear: 32 },
    { month: 'Mar', thisYear: 28, lastYear: 35 },
    { month: 'Apr', thisYear: 51, lastYear: 40 },
    { month: 'May', thisYear: 42, lastYear: 38 },
    { month: 'Jun', thisYear: 62, lastYear: 45 },
    { month: 'Jul', thisYear: 55, lastYear: 52 },
    { month: 'Aug', thisYear: 73, lastYear: 60 }
]
