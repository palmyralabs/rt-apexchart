import { FlexiApexChart } from "../../../src/main";
import 'apexcharts/violin';

const ViolinChart = () => {

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'group', yKey: (d: any) => d.samples
            }}
                data={data} type="violin"
                chart={{ toolbar: { show: false } }}
                legend={{ show: false }}
                seriesOptions={[{ name: 'Distribution' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default ViolinChart
export { data }

const data = [
    { group: 'Team A', samples: [32, 35, 38, 40, 41, 42, 43, 44, 45, 46, 38, 39, 41, 43, 40, 37, 42, 44, 39, 41] },
    { group: 'Team B', samples: [45, 48, 50, 52, 54, 55, 56, 58, 60, 62, 50, 53, 57, 59, 61, 47, 54, 58, 52, 56] },
    { group: 'Team C', samples: [26, 28, 29, 30, 30, 31, 31, 32, 33, 28, 29, 30, 31, 30, 29, 32, 30, 28, 31, 30] },
    { group: 'Team D', samples: [20, 22, 24, 45, 47, 49, 21, 23, 46, 48, 20, 25, 44, 50, 22, 47, 23, 48, 21, 46] }
]
