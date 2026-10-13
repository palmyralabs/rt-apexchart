import { FlexiApexChart } from "../../../src/main";
import { MULTI_TYPES } from "../../util/chartTypeSets";
import { useDataPointClick } from "../../util/useDataPointClick";

const StackedBarChart = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart">
            {modal}
            <FlexiApexChart type="bar" chartTypes={MULTI_TYPES} transformOptions={{
                xKey: 'month', yKey: ['online', 'retail', 'wholesale']
            }}
                data={data}
                chart={{ stacked: true, events: dataPointClickEvents }}
                plotOptions={{
                    bar: {
                        horizontal: false,
                        borderRadius: 4,
                        columnWidth: '45%'
                    }
                }}
                legend={{ position: "top" }}
                seriesOptions={[
                    { name: 'Online' },
                    { name: 'Retail' },
                    { name: 'Wholesale' }
                ]}
                dataLabels={{ enabled: true }}
                height="350" width="900"
            />
        </div>
    );

}
export default StackedBarChart
export { data }

const data = [
    { month: 'Jan', online: 44, retail: 13, wholesale: 11 },
    { month: 'Feb', online: 55, retail: 23, wholesale: 17 },
    { month: 'Mar', online: 41, retail: 20, wholesale: 15 },
    { month: 'Apr', online: 67, retail: 8, wholesale: 21 },
    { month: 'May', online: 22, retail: 13, wholesale: 14 },
    { month: 'Jun', online: 43, retail: 27, wholesale: 19 },
    { month: 'Jul', online: 21, retail: 33, wholesale: 9 },
    { month: 'Aug', online: 49, retail: 22, wholesale: 25 }
]
