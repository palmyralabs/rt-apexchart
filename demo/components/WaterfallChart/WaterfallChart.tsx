import { FlexiApexChart } from "../../../src/main";
import { IenhanceData } from "../../../src/palmyra/apexchart/types";

const WaterfallChart = () => {

    const enhanceData: IenhanceData = (_x, _y, row: any) => {
        if (row.kind === 'total') return { fillColor: '#0c77e3' };
        return { fillColor: row.inc ? '#2ec76e' : '#e23b3b' };
    }

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'label', yKey: (d: any) => [d.y0, d.y1]
            }}
                data={data} type="rangeBar"
                chart={{ toolbar: { show: false } }}
                plotOptions={{ bar: { horizontal: false, columnWidth: '55%', borderRadius: 2 } }}
                enhanceData={enhanceData}
                dataLabels={{ enabled: false }}
                legend={{ show: false }}
                seriesOptions={[{ name: 'Balance' }]}
                height="350" width="900"
            />
        </div>
    );

}
export default WaterfallChart
export { data }

const data = [
    { label: 'Opening', y0: 0, y1: 100, kind: 'total' },
    { label: 'Q1 Sales', y0: 100, y1: 150, inc: true },
    { label: 'Q2 Refunds', y0: 120, y1: 150, inc: false },
    { label: 'Q3 Sales', y0: 120, y1: 165, inc: true },
    { label: 'Q4 Costs', y0: 140, y1: 165, inc: false },
    { label: 'Closing', y0: 0, y1: 140, kind: 'total' }
]
