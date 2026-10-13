import { FlexiApexChart } from "../../../src/main";
import { useDataPointClick } from "../../util/useDataPointClick";

const captionStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: 500,
    marginBottom: '8px',
    color: 'rgba(0, 0, 0, 0.6)'
};

const ChartScale = () => {

    const { dataPointClickEvents, modal } = useDataPointClick();

    return (
        <div id="chart" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {modal}
            <div>
                <div style={captionStyle}>Linear scale</div>
                <FlexiApexChart transformOptions={{ xKey: 'tier', yKey: 'users' }}
                    data={data} type="bar"
                    chart={{ toolbar: { show: false }, events: dataPointClickEvents }}
                    plotOptions={{ bar: { borderRadius: 4, columnWidth: '55%' } }}
                    colors={['#0c77e3']}
                    legend={{ show: false }}
                    dataLabels={{ enabled: false }}
                    height="320" width="420" />
            </div>
            <div>
                <div style={captionStyle}>Logarithmic scale</div>
                <FlexiApexChart transformOptions={{ xKey: 'tier', yKey: 'users' }}
                    data={data} type="bar"
                    chart={{ toolbar: { show: false }, events: dataPointClickEvents }}
                    plotOptions={{ bar: { borderRadius: 4, columnWidth: '55%' } }}
                    colors={['#14b8a6']}
                    yaxis={{ logarithmic: true }}
                    legend={{ show: false }}
                    dataLabels={{ enabled: false }}
                    height="320" width="420" />
            </div>
        </div>
    );

}
export default ChartScale
export { data }

const data = [
    { tier: 'Startup', users: 12 },
    { tier: 'Small', users: 340 },
    { tier: 'Medium', users: 5600 },
    { tier: 'Large', users: 92000 },
    { tier: 'Enterprise', users: 1500000 }
]
