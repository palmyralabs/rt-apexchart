import { FlexiApexChart } from "../../../src/main";
import { TREEMAP_TYPES } from "../../util/chartTypeSets";
import { useDataPointClick } from "../../util/useDataPointClick";

const TreemapChart = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart">
            {modal}
            <FlexiApexChart type="treemap" chartTypes={TREEMAP_TYPES} transformOptions={{
                xKey: 'name', yKey: 'value'
            }}
                data={data}
                chart={{ toolbar: { show: false }, animations: { enabled: false }, events: dataPointClickEvents }}
                legend={{ show: false }}
                dataLabels={{ enabled: true }}
                seriesOptions={[{ name: 'Share' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default TreemapChart
export { data }

const data = [
    { name: 'Direct', value: 42 },
    { name: 'Organic Search', value: 33 },
    { name: 'Referral', value: 21 },
    { name: 'Social', value: 18 },
    { name: 'Email', value: 14 },
    { name: 'Paid Ads', value: 11 },
    { name: 'Affiliate', value: 7 }
]
