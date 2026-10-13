import { useEffect, ReactNode } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDataPointClick as useDataPointClickCore } from "../../src/main";

interface DataPointClickOptions {
    title?: string;
    render?: (clicked: any) => ReactNode;
}

const preStyle: React.CSSProperties = {
    margin: 0,
    padding: '16px 18px',
    borderRadius: 10,
    background: '#1e2630',
    color: '#e6edf3',
    fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
    fontSize: 13,
    lineHeight: 1.6,
    overflow: 'auto',
    whiteSpace: 'pre'
};

const useDataPointClick = (options: DataPointClickOptions = {}) => {
    const { events, dataPoint, reset } = useDataPointClickCore();
    const clicked = dataPoint;

    useEffect(() => {
        if (clicked) console.log('dataPointClick', clicked);
    }, [clicked]);

    const modal = (
        <Dialog open={!!clicked} onClose={reset} maxWidth="xs" fullWidth>
            <DialogTitle sx={{ fontSize: 18, fontWeight: 500, pr: 6 }}>
                {options.title || 'Clicked data point'}
                <IconButton onClick={reset} sx={{ position: 'absolute', right: 8, top: 8 }}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {clicked && (options.render
                    ? options.render(clicked)
                    : <pre style={preStyle}>{JSON.stringify(clicked, null, 2)}</pre>)}
            </DialogContent>
        </Dialog>
    );

    return { dataPointClickEvents: events, clicked, reset, modal };
};

export { useDataPointClick };
export type { DataPointClickOptions };
