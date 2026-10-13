import { FlexiApexChart } from "../../../src/main";

const HistogramChart = () => {

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'bin', yKey: 'count'
            }}
                data={data} type="bar"
                chart={{ toolbar: { show: false } }}
                plotOptions={{ bar: { columnWidth: '98%', borderRadius: 0 } }}
                colors={['#0c77e3']}
                dataLabels={{ enabled: false }}
                legend={{ show: false }}
                xaxis={{ title: { text: 'Response time (ms)' } }}
                yaxis={{ title: { text: 'Frequency' } }}
                seriesOptions={[{ name: 'Frequency' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default HistogramChart
export { data }

const data = [
    { bin: '0-20', count: 4 },
    { bin: '20-40', count: 11 },
    { bin: '40-60', count: 23 },
    { bin: '60-80', count: 38 },
    { bin: '80-100', count: 47 },
    { bin: '100-120', count: 41 },
    { bin: '120-140', count: 29 },
    { bin: '140-160', count: 16 },
    { bin: '160-180', count: 7 },
    { bin: '180-200', count: 3 }
]
