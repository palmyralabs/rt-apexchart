import { Link } from "react-router-dom";
import ChartGallery from "../../components/common/ChartGallery";
import "../pages.css";

const highlights = [
    { title: "Data-driven", text: "Feed plain arrays or objects and let transformOptions map them to any chart." },
    { title: "Eleven chart types", text: "Bar, line, scatter, bubble, pie, radar and more, all from one component." },
    { title: "Composable", text: "Pass any ApexCharts option through while Palmyra handles the data shaping." }
];

const HomePage = () => {
    return (
        <div className="page">
            <header className="page-hero">
                <h1 className="page-title">Palmyra Apex Charts</h1>
                <p className="page-subtitle">
                    A thin, data-driven wrapper over ApexCharts. Map your data once and render any chart type
                    with a single component.
                </p>
                <div className="hero-actions">
                    <Link to="/ui/demo" className="btn btn-primary">Browse charts</Link>
                    <Link to="/ui/initialSetup" className="btn btn-ghost">Get started</Link>
                </div>
            </header>

            <div className="highlight-row">
                {highlights.map((h) => (
                    <div key={h.title} className="highlight">
                        <h4 className="highlight-title">{h.title}</h4>
                        <p className="highlight-text">{h.text}</p>
                    </div>
                ))}
            </div>

            <h3 className="page-section-label">Explore the gallery</h3>
            <ChartGallery />
        </div>
    );
};

export default HomePage;
