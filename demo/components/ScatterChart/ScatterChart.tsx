import { FlexiApexChart } from "../../../src/main";

const ScatterChart = () => {

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'x', yKey: ['sampleA', 'sampleB']
            }}
                data={data} type="scatter"
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
