interface ChartCodeProps {
    code: string;
}

const ChartCode = ({ code }: ChartCodeProps) => {
    return (
        <details className="sample-data" open>
            <summary className="sample-data-summary">Usage</summary>
            <div className="sample-data-block">
                <pre className="sample-data-code">{code}</pre>
            </div>
        </details>
    );
};

export default ChartCode;
