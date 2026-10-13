import "../pages.css";

const installSnippet = `npm install @palmyralabs/rt-apexchart apexcharts`;

const importSnippet = `import { FlexiApexChart } from "@palmyralabs/rt-apexchart";`;

const usageSnippet = `const data = [
  { month: "Jan", value: 10 },
  { month: "Feb", value: 41 },
  { month: "Mar", value: 35 }
];

<FlexiApexChart
  type="bar"
  data={data}
  transformOptions={{ xKey: "month", yKey: "value" }}
  height="350"
  width="600"
/>`;

const multiSnippet = `<FlexiApexChart
  type="line"
  data={data}
  transformOptions={{ xKey: "month", yKey: ["revenue", "target"] }}
  seriesOptions={[{ name: "Revenue" }, { name: "Target" }]}
/>`;

const InitialSetupPage = () => {
    return (
        <div className="page">
            <header className="page-hero">
                <h1 className="page-title">Initial Setup</h1>
                <p className="page-subtitle">
                    Install the package, point it at your data, and render your first chart in a few lines.
                </p>
            </header>

            <div className="doc-card">
                <div className="doc-step">
                    <span className="doc-step-num">1</span>
                    <div>
                        <h3 className="doc-step-title">Install</h3>
                        <p className="doc-step-text">
                            Add the chart library together with its <span className="code-inline">apexcharts</span> peer
                            dependency.
                        </p>
                        <pre className="code-block">{installSnippet}</pre>
                    </div>
                </div>
            </div>

            <div className="doc-card">
                <div className="doc-step">
                    <span className="doc-step-num">2</span>
                    <div>
                        <h3 className="doc-step-title">Import the component</h3>
                        <p className="doc-step-text">
                            <span className="code-inline">FlexiApexChart</span> is the single entry point for every
                            chart type.
                        </p>
                        <pre className="code-block">{importSnippet}</pre>
                    </div>
                </div>
            </div>

            <div className="doc-card">
                <div className="doc-step">
                    <span className="doc-step-num">3</span>
                    <div>
                        <h3 className="doc-step-title">Render a chart</h3>
                        <p className="doc-step-text">
                            Pass your raw <span className="code-inline">data</span> and describe how to read it with
                            <span className="code-inline"> transformOptions</span>. The chart type is set with
                            <span className="code-inline"> type</span>.
                        </p>
                        <pre className="code-block">{usageSnippet}</pre>
                    </div>
                </div>
            </div>

            <div className="doc-card">
                <div className="doc-step">
                    <span className="doc-step-num">4</span>
                    <div>
                        <h3 className="doc-step-title">Add more series</h3>
                        <p className="doc-step-text">
                            Give <span className="code-inline">yKey</span> an array to plot several measures, and name
                            them through <span className="code-inline">seriesOptions</span>.
                        </p>
                        <pre className="code-block">{multiSnippet}</pre>
                    </div>
                </div>
            </div>

            <p className="page-subtitle">
                See the full prop list on the API page, or browse working examples in the Demos.
            </p>
        </div>
    );
};

export default InitialSetupPage;
