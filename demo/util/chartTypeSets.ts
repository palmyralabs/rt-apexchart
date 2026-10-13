import { IChartTypeOption } from "../../src/main";

const VALUE_TYPES: IChartTypeOption[] = [
    { value: 'bar', label: 'Bar' },
    { value: 'line', label: 'Line' },
    { value: 'area', label: 'Area' },
    { value: 'pie', label: 'Pie' },
    { value: 'donut', label: 'Doughnut' },
    { value: 'polarArea', label: 'Polar Area' },
    { value: 'radar', label: 'Radar' },
    { value: 'radialBar', label: 'Radial Bar' }
];

const MULTI_TYPES: IChartTypeOption[] = [
    { value: 'bar', label: 'Bar' },
    { value: 'line', label: 'Line' },
    { value: 'area', label: 'Area' },
    { value: 'radar', label: 'Radar' }
];

const SCATTER_TYPES: IChartTypeOption[] = [
    { value: 'scatter', label: 'Scatter' },
    { value: 'line', label: 'Line' },
    { value: 'area', label: 'Area' }
];

const BUBBLE_TYPES: IChartTypeOption[] = [
    { value: 'bubble', label: 'Bubble' },
    { value: 'scatter', label: 'Scatter' },
     { value: 'area', label: 'Area' },
     { value: 'pie', label: 'Pie' },
    { value: 'donut', label: 'Doughnut' },
];

const TREEMAP_TYPES: IChartTypeOption[] = [
    { value: 'treemap', label: 'Treemap' },
    { value: 'bar', label: 'Bar' },
    { value: 'pie', label: 'Pie' },
    { value: 'donut', label: 'Doughnut' }
];

export { VALUE_TYPES, MULTI_TYPES, SCATTER_TYPES, BUBBLE_TYPES, TREEMAP_TYPES };
