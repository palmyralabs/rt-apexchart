import { isValidElement, ReactNode } from "react";
import SampleData from "./SampleData";
import ChartCode from "./ChartCode";
import { getChartSource } from "./chartSource";
import './DemoCard.css';

interface DemoCardProps {
    title: string;
    description?: string;
    tag?: string;
    data?: any;
    transformOptions?: any;
    children: ReactNode;
}

const resolveChildName = (children: ReactNode): string | undefined => {
    if (isValidElement(children) && typeof children.type === "function") {
        const t: any = children.type;
        return t.displayName || t.name;
    }
    return undefined;
};

const DemoCard = ({ title, description, tag, data, transformOptions, children }: DemoCardProps) => {
    const code = getChartSource(resolveChildName(children));

    return (
        <div className="demo-card">
            <div className="demo-card-header">
                <div className="demo-card-heading">
                    <h2 className="demo-card-title">{title}</h2>
                    {tag && <span className="demo-card-tag">{tag}</span>}
                </div>
                {description && <p className="demo-card-desc">{description}</p>}
            </div>
            <div className="demo-card-body">
                <div className="demo-card-canvas">
                    {children}
                </div>
            </div>
            {code && (
                <div className="demo-card-data">
                    <ChartCode code={code} />
                </div>
            )}
            {data !== undefined && (
                <div className="demo-card-data">
                    <SampleData data={data} transformOptions={transformOptions} />
                </div>
            )}
        </div>
    );
};

export default DemoCard;
