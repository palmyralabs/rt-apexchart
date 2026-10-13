import { FlexiApexChart } from "../../../src/main";

const BoxPlotChart = () => {

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'group',
                yKey: (d: any) => [d.min, d.q1, d.median, d.q3, d.max]
            }}
                data={data} type="boxPlot"
                seriesOptions={[{ name: 'Distribution' }]}
                plotOptions={{
                    boxPlot: {
                        colors: { upper: '#5aa6f0', lower: '#0c77e3' }
                    }
                }}
                height="350" width="900"
            />
        </div>
    );

}
export default BoxPlotChart

const data = [
    { group: 'Team A', min: 12, q1: 24, median: 33, q3: 42, max: 54 },
    { group: 'Team B', min: 18, q1: 28, median: 40, q3: 48, max: 62 },
    { group: 'Team C', min: 9, q1: 20, median: 28, q3: 38, max: 50 },
    { group: 'Team D', min: 22, q1: 34, median: 44, q3: 55, max: 68 },
    { group: 'Team E', min: 15, q1: 26, median: 36, q3: 46, max: 58 }
]
