import ChartGallery from "../../components/common/ChartGallery";
import "../pages.css";

const DemoPage = () => {
    return (
        <div className="page">
            <header className="page-hero">
                <h1 className="page-title">Chart Demos</h1>
                <p className="page-subtitle">
                    Every chart type the library ships with, grouped by what it is good at. Open any card to see a
                    live demo and its configuration.
                </p>
            </header>
            <ChartGallery />
        </div>
    );
};

export default DemoPage;
