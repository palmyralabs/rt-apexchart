import { FlexiApexChart } from "../../../src/main";
import { useDataPointClick } from "../../util/useDataPointClick";

const ScatterChart = () => {

    const { dataPointClickEvents, clicked, reset } = useDataPointClick();

    return (
        <div id="chart">
            {clicked && (
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 14px', marginBottom: 12, borderRadius: 8,
                    background: 'rgba(12, 119, 227, 0.08)', fontSize: 14
                }}>
                    <span style={{ fontWeight: 500 }}>{clicked.seriesName}</span>
                    <span>x: {clicked.dataPoint?.x}, y: {clicked.dataPoint?.y}</span>
                    <button onClick={reset} style={{
                        marginLeft: 'auto', border: 'none', background: 'transparent',
                        cursor: 'pointer', color: '#0c77e3', fontSize: 13
                    }}>clear</button>
                </div>
            )}
            <FlexiApexChart transformOptions={{
                xKey: 'x', yKey: ['sampleA', 'sampleB']
            }}
                data={data} type="scatter"
                chart={{ events: dataPointClickEvents }}
                xaxis={{ type: 'numeric', tickAmount: 10 }}
                yaxis={{ tickAmount: 7 }}
                legend={{ position: "top" }}
                seriesOptions={[
                    { name: 'Sample A' },
                    { name: 'Sample B' }
                ]}
                markers={{ size: 6 }}
                height="350" width="900"
            />
        </div>
    );

}
export default ScatterChart
export { data }

const data = [
    { x: 1, sampleA: 21, sampleB: 11 },
    { x: 2.5, sampleA: 24, sampleB: 17 },
    { x: 3.2, sampleA: 30, sampleB: 9 },
    { x: 4.8, sampleA: 18, sampleB: 25 },
    { x: 5.5, sampleA: 36, sampleB: 14 },
    { x: 6.1, sampleA: 27, sampleB: 31 },
    { x: 7.4, sampleA: 42, sampleB: 20 },
    { x: 8.9, sampleA: 33, sampleB: 38 },
    { x: 9.3, sampleA: 48, sampleB: 26 },
    { x: 10.6, sampleA: 39, sampleB: 44 }
]
