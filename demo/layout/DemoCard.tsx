import { ReactNode } from "react";
import './DemoCard.css';

interface DemoCardProps {
    title: string;
    description?: string;
    tag?: string;
    children: ReactNode;
}

const DemoCard = ({ title, description, tag, children }: DemoCardProps) => {
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
        </div>
    );
};

export default DemoCard;
