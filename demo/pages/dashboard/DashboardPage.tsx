import { FlexiApexChart } from "../../../src/main";
import "../pages.css";

const kpis = [
    { label: "Total Revenue", value: "$284.6k", delta: "+12.4%", dir: "up" },
    { label: "Orders", value: "3,812", delta: "+5.1%", dir: "up" },
    { label: "Active Users", value: "9,274", delta: "+8.7%", dir: "up" },
    { label: "Refund Rate", value: "1.8%", delta: "-0.4%", dir: "down" }
];

const DashboardPage = () => {
    return (
        <div className="page">
            <header className="page-hero">
                <h1 className="page-title">Sales Dashboard</h1>
                <p className="page-subtitle">
                    A composite view built entirely from the chart components, showing how they combine into a
                    real screen.
                </p>
            </header>

            <div className="kpi-row">
                {kpis.map((k) => (
                    <div key={k.label} className="kpi">
                        <p className="kpi-label">{k.label}</p>
                        <p className="kpi-value">
                            {k.value}{" "}
                            <span className={`kpi-delta ${k.dir}`}>{k.delta}</span>
                        </p>
                    </div>
                ))}
            </div>

            <div className="dash-grid">
                <div className="dash-panel">
                    <h3 className="dash-panel-title">Revenue by Channel</h3>
                    <div className="dash-panel-body">
                        <FlexiApexChart transformOptions={{
                            xKey: 'month', yKey: ['online', 'retail', 'wholesale']
                        }}
                            data={channelData} type="bar"
                            chart={{ stacked: true, toolbar: { show: false } }}
                            plotOptions={{ bar: { borderRadius: 4, columnWidth: '50%' } }}
                            legend={{ position: "top" }}
                            seriesOptions={[{ name: 'Online' }, { name: 'Retail' }, { name: 'Wholesale' }]}
                            height="300" width="100%"
                        />
                    </div>
                </div>

                <div className="dash-panel">
                    <h3 className="dash-panel-title">Monthly Trend</h3>
                    <div className="dash-panel-body">
                        <FlexiApexChart transformOptions={{
                            xKey: 'month', yKey: ['revenue', 'target']
                        }}
                            data={trendData} type="line"
                            chart={{ toolbar: { show: false } }}
                            stroke={{ curve: 'smooth', width: 3 }}
                            legend={{ position: "top" }}
                            seriesOptions={[{ name: 'Revenue' }, { name: 'Target' }]}
                            height="300" width="100%"
                        />
                    </div>
                </div>

                <div className="dash-panel">
                    <h3 className="dash-panel-title">Traffic Sources</h3>
                    <div className="dash-panel-body">
                        <FlexiApexChart transformOptions={{
                            xKey: 'source', yKey: 'visits'
                        }}
                            data={sourceData} type="donut"
                            legend={{ position: "bottom" }}
                            height="300" width="100%"
                        />
                    </div>
                </div>

                <div className="dash-panel">
                    <h3 className="dash-panel-title">Spend vs Return</h3>
                    <div className="dash-panel-body">
                        <FlexiApexChart transformOptions={{
                            xKey: 'spend', yKey: 'return', rKey: 'reach'
                        }}
                            data={campaignData} type="bubble"
                            chart={{ toolbar: { show: false } }}
                            xaxis={{ type: 'numeric', tickAmount: 6 }}
                            legend={{ show: false }}
                            seriesOptions={[{ name: 'Campaign' }]}
                            fill={{ opacity: 0.8 }}
                            height="300" width="100%"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

const channelData = [
    { month: 'Jan', online: 44, retail: 13, wholesale: 11 },
    { month: 'Feb', online: 55, retail: 23, wholesale: 17 },
    { month: 'Mar', online: 41, retail: 20, wholesale: 15 },
    { month: 'Apr', online: 67, retail: 8, wholesale: 21 },
    { month: 'May', online: 22, retail: 13, wholesale: 14 },
    { month: 'Jun', online: 43, retail: 27, wholesale: 19 }
];

const trendData = [
    { month: 'Jan', revenue: 31, target: 40 },
    { month: 'Feb', revenue: 40, target: 42 },
    { month: 'Mar', revenue: 28, target: 44 },
    { month: 'Apr', revenue: 51, target: 46 },
    { month: 'May', revenue: 42, target: 48 },
    { month: 'Jun', revenue: 62, target: 50 }
];

const sourceData = [
    { source: 'Direct', visits: 42 },
    { source: 'Organic', visits: 33 },
    { source: 'Referral', visits: 15 },
    { source: 'Social', visits: 10 }
];

const campaignData = [
    { spend: 12, return: 22, reach: 20 },
    { spend: 24, return: 35, reach: 34 },
    { spend: 38, return: 18, reach: 12 },
    { spend: 51, return: 44, reach: 40 },
    { spend: 63, return: 27, reach: 22 },
    { spend: 77, return: 51, reach: 48 }
];
