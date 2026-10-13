import { FlexiApexChart } from "../../../src/main";
import { useDataPointClick } from "../../util/useDataPointClick";

const GaugeChart = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart">
            {modal}
            <FlexiApexChart transformOptions={{
                xKey: 'label', yKey: 'value'
            }}
                data={data} type="radialBar"
                chart={{ events: dataPointClickEvents }}
                plotOptions={{
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        hollow: { size: '62%' },
                        track: { background: '#e9eef5', strokeWidth: '100%' },
                        dataLabels: {
                            name: { offsetY: -10, fontSize: '14px' },
                            value: { offsetY: 6, fontSize: '30px' }
                        }
                    }
                }}
                fill={{
                    type: 'gradient',
                    gradient: { shade: 'light', shadeIntensity: 0.4, gradientToColors: ['#2ec76e'], stops: [0, 100] }
                }}
                legend={{ show: false }}
                height="350" width="500"
            />
        </div>
    );

}
export default GaugeChart
export { data }

const data = [
    { label: 'Performance', value: 72 }
]
