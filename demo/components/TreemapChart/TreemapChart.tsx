import { FlexiApexChart } from "../../../src/main";

const TreemapChart = () => {

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'name', yKey: 'value'
            }}
                data={data} type="treemap"
                chart={{ toolbar: { show: false }, animations: { enabled: false } }}
                legend={{ show: false }}
                dataLabels={{ enabled: true }}
                seriesOptions={[{ name: 'Share' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default TreemapChart

const data = [
    { name: 'Direct', value: 42 },
    { name: 'Organic Search', value: 33 },
    { name: 'Referral', value: 21 },
    { name: 'Social', value: 18 },
    { name: 'Email', value: 14 },
    { name: 'Paid Ads', value: 11 },
    { name: 'Affiliate', value: 7 }
]
