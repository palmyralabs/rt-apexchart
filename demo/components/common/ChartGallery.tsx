import { Link } from "react-router-dom";
import "./ChartGallery.css";

interface ChartLink {
    name: string;
    path: string;
    description: string;
    group: string;
}

const charts: ChartLink[] = [
    { name: "Bar Chart", path: "/ui/chart/demo/barChart", description: "Compare values across discrete categories.", group: "Comparison" },
    { name: "Grouped Bar Chart", path: "/ui/chart/demo/groupedBarChart", description: "Compare multiple series side by side per category.", group: "Comparison" },
    { name: "Stacked Bar Chart", path: "/ui/chart/demo/stackedBarChart", description: "Show part-to-whole totals stacked per category.", group: "Comparison" },
    { name: "Line Chart", path: "/ui/chart/demo/lineChart", description: "Track a single measure over a continuous axis.", group: "Trend" },
    { name: "Multi Line Chart", path: "/ui/chart/demo/multiLineChart", description: "Compare trends of several measures together.", group: "Trend" },
    { name: "Scatter Chart", path: "/ui/chart/demo/scatterChart", description: "Plot the relationship between two numeric values.", group: "Correlation" },
    { name: "Bubble Chart", path: "/ui/chart/demo/bubbleChart", description: "Add a third dimension through bubble size.", group: "Correlation" },
    { name: "Pie Chart", path: "/ui/chart/demo/pieChart", description: "Show proportions of a single total.", group: "Composition" },
    { name: "Doughnut Chart", path: "/ui/chart/demo/doughnutChart", description: "A pie with a center cutout for a cleaner read.", group: "Composition" },
    { name: "Polar Area Chart", path: "/ui/chart/demo/polarAreaChart", description: "Compare categories by segment radius.", group: "Composition" },
    { name: "Radar Chart", path: "/ui/chart/demo/radarChart", description: "Compare several variables on shared axes.", group: "Composition" }
];

const groupOrder = ["Comparison", "Trend", "Correlation", "Composition"];

const ChartGallery = () => {
    return (
        <div className="gallery">
            {groupOrder.map((group) => (
                <section key={group} className="gallery-section">
                    <h3 className="gallery-section-title">{group}</h3>
                    <div className="gallery-grid">
                        {charts.filter((c) => c.group === group).map((c) => (
                            <Link key={c.path} to={c.path} className="gallery-card">
                                <span className="gallery-card-name">{c.name}</span>
                                <span className="gallery-card-desc">{c.description}</span>
                                <span className="gallery-card-link">View demo →</span>
                            </Link>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ChartGallery;
export { charts };
