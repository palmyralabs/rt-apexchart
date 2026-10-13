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
    { name: "Range Bar Chart", path: "/ui/chart/demo/rangeBarChart", description: "Plot start-to-end ranges, ideal for timelines.", group: "Comparison" },
    { name: "Waterfall Chart", path: "/ui/chart/demo/waterfallChart", description: "Show cumulative increases and decreases to a total.", group: "Comparison" },
    { name: "Line Chart", path: "/ui/chart/demo/lineChart", description: "Track a single measure over a continuous axis.", group: "Trend" },
    { name: "Multi Line Chart", path: "/ui/chart/demo/multiLineChart", description: "Compare trends of several measures together.", group: "Trend" },
    { name: "Area Chart", path: "/ui/chart/demo/areaChart", description: "Track trends with a filled line for volume.", group: "Trend" },
    { name: "Streamgraph", path: "/ui/chart/demo/streamgraphChart", description: "See how category shares flow and shift over time.", group: "Trend" },
    { name: "Slope Chart", path: "/ui/chart/demo/slopeChart", description: "Compare change between two points in time.", group: "Trend" },
    { name: "Scatter Chart", path: "/ui/chart/demo/scatterChart", description: "Plot the relationship between two numeric values.", group: "Correlation" },
    { name: "Bubble Chart", path: "/ui/chart/demo/bubbleChart", description: "Add a third dimension through bubble size.", group: "Correlation" },
    { name: "Heatmap Chart", path: "/ui/chart/demo/heatmapChart", description: "Show intensity across two categories by colour.", group: "Correlation" },
    { name: "Pie Chart", path: "/ui/chart/demo/pieChart", description: "Show proportions of a single total.", group: "Composition" },
    { name: "Doughnut Chart", path: "/ui/chart/demo/doughnutChart", description: "A pie with a center cutout for a cleaner read.", group: "Composition" },
    { name: "Polar Area Chart", path: "/ui/chart/demo/polarAreaChart", description: "Compare categories by segment radius.", group: "Composition" },
    { name: "Radar Chart", path: "/ui/chart/demo/radarChart", description: "Compare several variables on shared axes.", group: "Composition" },
    { name: "Radial Bar Chart", path: "/ui/chart/demo/radialBarChart", description: "Show share or progress as circular gauges.", group: "Composition" },
    { name: "Treemap Chart", path: "/ui/chart/demo/treemapChart", description: "Size nested rectangles by value to rank many items.", group: "Composition" },
    { name: "Funnel Chart", path: "/ui/chart/demo/funnelChart", description: "Track how a population narrows across process stages.", group: "Composition" },
    { name: "Gauge Chart", path: "/ui/chart/demo/gaugeChart", description: "Show a single value on a semicircular dial.", group: "Composition" },
    { name: "Sunburst Chart", path: "/ui/chart/demo/sunburstChart", description: "Show a hierarchy as concentric value-sized rings.", group: "Composition" },
    { name: "Candlestick Chart", path: "/ui/chart/demo/candlestickChart", description: "Show open, high, low and close per period.", group: "Financial & Statistical" },
    { name: "Box Plot Chart", path: "/ui/chart/demo/boxPlotChart", description: "Summarise the spread of each group with quartiles.", group: "Financial & Statistical" },
    { name: "Histogram", path: "/ui/chart/demo/histogramChart", description: "Show the distribution of values across bins.", group: "Financial & Statistical" },
    { name: "Violin Chart", path: "/ui/chart/demo/violinChart", description: "Show each group's full distribution as a density curve.", group: "Financial & Statistical" }
];

const groupOrder = ["Comparison", "Trend", "Correlation", "Composition", "Financial & Statistical"];

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
