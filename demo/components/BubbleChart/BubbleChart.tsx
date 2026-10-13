import { FlexiApexChart } from "../../../src/main";
import { BUBBLE_TYPES } from "../../util/chartTypeSets";
import { useDataPointClick } from "../../util/useDataPointClick";

const BubbleChart = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart">
            {modal}
            <FlexiApexChart type="bubble" chartTypes={BUBBLE_TYPES} transformOptions={{
                xKey: 'x', yKey: 'y', rKey: 'size'
            }}
                data={data}
                chart={{ events: dataPointClickEvents }}
                xaxis={{ type: 'numeric', tickAmount: 10 }}
                yaxis={{ tickAmount: 7 }}
                legend={{ position: "top" }}
                seriesOptions={[
                    { name: 'Region Load' }
                ]}
                fill={{ opacity: 0.8 }}
                dataLabels={{ enabled: false }}
                height="350" width="900"
            />
        </div>
    );

}
export default BubbleChart
export { data }

const data = [
    { x: 1, y: 22, size: 13 },
    { x: 2.4, y: 35, size: 28 },
    { x: 3.8, y: 18, size: 9 },
    { x: 5.1, y: 44, size: 35 },
    { x: 6.3, y: 27, size: 18 },
    { x: 7.7, y: 51, size: 42 },
    { x: 8.5, y: 33, size: 22 },
    { x: 9.9, y: 40, size: 31 }
]
