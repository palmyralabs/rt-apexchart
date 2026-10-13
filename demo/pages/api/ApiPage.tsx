import "../pages.css";

interface Row {
    name: string;
    type: string;
    required?: boolean;
    desc: string;
}

const props: Row[] = [
    { name: "type", type: "'bar' | 'line' | 'area' | 'scatter' | 'bubble' | 'pie' | 'donut' | 'radar' | 'polarArea' | 'radialBar'", required: true, desc: "The ApexCharts chart type to render." },
    { name: "data", type: "any[] | object", required: true, desc: "Raw source data. Shape is interpreted through transformOptions." },
    { name: "transformOptions", type: "ITransformOptions", required: true, desc: "Describes how keys in your data map to chart axes and series." },
    { name: "seriesOptions", type: "ISeriesOptions[]", desc: "Per-series overrides such as name and color, applied by index." },
    { name: "enhanceData", type: "IenhanceData", desc: "Callback to decorate individual data points, for example per-point fill colors or goals." },
    { name: "getChartConsumer", type: "ChartConsumerGenerator", desc: "Advanced hook to supply a custom data consumer instead of the built-in one." },
    { name: "height / width", type: "string", desc: "Dimensions passed straight to ApexCharts, e.g. \"350\" or \"100%\"." },
    { name: "...options", type: "ApexOptions", desc: "Any ApexCharts option (legend, title, plotOptions, xaxis, fill, colors, stroke, ...) is accepted and forwarded." }
];

const transform: Row[] = [
    { name: "xKey", type: "string | (d) => value", desc: "Key or accessor for the category / x value." },
    { name: "yKey", type: "string | string[] | accessor", desc: "Key(s) for the measured value. An array produces one series per key." },
    { name: "rKey", type: "string | accessor", desc: "Radius / size value for bubble charts, emitted as the z dimension." },
    { name: "groupKey", type: "string | accessor", desc: "Key used to split rows into grouped series." },
    { name: "xLabel", type: "string | accessor", desc: "Optional label for the x axis." },
    { name: "yLabel", type: "string | accessor | accessor[]", desc: "Optional display name(s) for the series." },
    { name: "rLabel", type: "string | accessor", desc: "Optional label for the radius value." },
    { name: "dataType", type: "'array' | 'object' | 'keyValue'", desc: "How the data container is shaped. Defaults to 'array'." }
];

const Table = ({ rows }: { rows: Row[] }) => (
    <div className="ref-table-wrap">
        <table className="ref-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((r) => (
                    <tr key={r.name}>
                        <td><code>{r.name}</code>{r.required && <span className="code-inline" style={{ marginLeft: 8 }}>required</span>}</td>
                        <td><code>{r.type}</code></td>
                        <td>{r.desc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const enhanceSnippet = `enhanceData={(x, y) => (y < 20 ? { fillColor: "#e23b3b" } : {})}`;

const ApiPage = () => {
    return (
        <div className="page">
            <header className="page-hero">
                <h1 className="page-title">API Reference</h1>
                <p className="page-subtitle">
                    Everything <span className="code-inline">FlexiApexChart</span> accepts. All standard ApexCharts
                    options pass through unchanged on top of these.
                </p>
            </header>

            <h3 className="page-section-label">Component props</h3>
            <Table rows={props} />

            <h3 className="page-section-label">transformOptions</h3>
            <Table rows={transform} />

            <h3 className="page-section-label">enhanceData</h3>
            <div className="doc-card">
                <p className="doc-step-text">
                    A callback invoked per data point as
                    <span className="code-inline"> (xValue, yValue, row, seriesIndex, dataIndex, key)</span>. Return an
                    object to merge into that point, such as <span className="code-inline">fillColor</span>,
                    <span className="code-inline"> strokeColor</span> or <span className="code-inline">goals</span>.
                </p>
                <pre className="code-block">{enhanceSnippet}</pre>
            </div>
        </div>
    );
};

export default ApiPage;
