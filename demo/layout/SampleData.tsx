interface SampleDataProps {
    data: any;
    transformOptions?: any;
}

const SampleData = ({ data, transformOptions }: SampleDataProps) => {
    return (
        <details className="sample-data" open>
            <summary className="sample-data-summary">Sample data</summary>
            {transformOptions && (
                <div className="sample-data-block">
                    <span className="sample-data-label">transformOptions</span>
                    <pre className="sample-data-code">{JSON.stringify(transformOptions, null, 2)}</pre>
                </div>
            )}
            <div className="sample-data-block">
                <span className="sample-data-label">data</span>
                <pre className="sample-data-code">{JSON.stringify(data, null, 2)}</pre>
            </div>
        </details>
    );
};

export default SampleData;
