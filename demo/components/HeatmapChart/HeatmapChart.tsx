import { FlexiApexChart } from "../../../src/main";
import { useDataPointClick } from "../../util/useDataPointClick";

const HeatmapChart = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart">
            {modal}
            <FlexiApexChart transformOptions={{
                xKey: 'day', yKey: ['morning', 'noon', 'evening', 'night']
            }}
                data={data} type="heatmap"
                chart={{ events: dataPointClickEvents }}
                dataLabels={{ enabled: true }}
                colors={['#0c77e3']}
                plotOptions={{
                    heatmap: {
                        shadeIntensity: 0.5,
                        colorScale: {
                            ranges: [
                                { from: 0, to: 20, color: '#c7e0fb', name: 'low' },
                                { from: 21, to: 50, color: '#5aa6f0', name: 'medium' },
                                { from: 51, to: 100, color: '#0c77e3', name: 'high' }
                            ]
                        }
                    }
                }}
                legend={{ position: "bottom" }}
                seriesOptions={[{ name: 'Morning' }, { name: 'Noon' }, { name: 'Evening' }, { name: 'Night' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default HeatmapChart
export { data }

const data = [
    { day: 'Mon', morning: 12, noon: 42, evening: 58, night: 9 },
    { day: 'Tue', morning: 18, noon: 48, evening: 61, night: 14 },
    { day: 'Wed', morning: 22, noon: 36, evening: 47, night: 11 },
    { day: 'Thu', morning: 15, noon: 52, evening: 66, night: 19 },
    { day: 'Fri', morning: 28, noon: 60, evening: 72, night: 25 },
    { day: 'Sat', morning: 34, noon: 30, evening: 40, night: 38 },
    { day: 'Sun', morning: 20, noon: 24, evening: 33, night: 16 }
]
