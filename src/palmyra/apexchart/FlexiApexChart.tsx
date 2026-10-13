import { useState } from "react";
import { useDataTransformer } from "./DataTransformer";
import { ReactApexChart } from "./ReactApexChart";
import { FlexiApexChartProps } from "./types";
import { extend, useDeepMemo } from "./utils/ObjectUtils";

const arrow = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23667085'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpolyline%20points='6%209%2012%2015%2018%209'/%3E%3C/svg%3E";

const selectStyle: React.CSSProperties = {
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    padding: '7px 36px 7px 14px',
    borderRadius: 8,
    border: '1px solid #d4dae3',
    background: `#fff url("${arrow}") no-repeat right 12px center`,
    backgroundSize: '14px',
    fontSize: 13.5,
    fontFamily: 'inherit',
    color: '#2a2f36',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)'
};

const FlexiApexChart = ({ transformOptions, seriesOptions, enhanceData,
    data,
    options,
    getChartConsumer,
    chartTypes,
    type,
    ...props }: FlexiApexChartProps) => {

    const hasSwitcher = !!(chartTypes && chartTypes.length > 1);
    const [selected, setSelected] = useState<string>(type);
    const activeType = hasSwitcher ? selected : type;

    const { series, ...o } = useDeepMemo(() => {
        const transformer = useDataTransformer(activeType, {
            seriesOptions,
            transformOptions,
            enhanceData,
            getChartConsumer
        });
        return transformer.transform(data);
    }, [activeType, data, transformOptions, seriesOptions, enhanceData, getChartConsumer]);

    const opt = extend(options, o);
    const chart = <ReactApexChart key={activeType} options={opt} {...props} type={activeType} series={series} />;

    if (!hasSwitcher)
        return chart;

    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
                <select value={selected} onChange={(e) => setSelected(e.target.value)} style={selectStyle}>
                    {chartTypes!.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                </select>
            </div>
            {chart}
        </div>
    );
}

export { FlexiApexChart }
