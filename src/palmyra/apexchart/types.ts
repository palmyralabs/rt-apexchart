import * as ApexChartsType from 'apexcharts'
import { ISeriesOptions, ITransformOptions } from "../chart/dataAccessor/types";
import { ResultType } from "../chart";

type ISeries = ApexAxisChartSeries[0];
type ISeriesDataType = ApexAxisChartSeries[0]["data"][0];
type chartType = ApexChart["type"];

interface IDataEnhanced {
    fill?: ApexFill;
    fillColor?: string;
    strokeColor?: string;
    meta?: any;
    goals?: {
        name?: string,
        value: number,
        strokeHeight?: number;
        strokeWidth?: number;
        strokeColor?: string;
        strokeDashArray?: number;
        strokeLineCap?: 'butt' | 'square' | 'round'
    }[];
    barHeightOffset?: number;
    columnWidthOffset?: number;
}

type IenhanceData = (xValue: ResultType, yValue: ResultType, value: any, dataIndex: number,
    seriesIndex: number, key: string) => IDataEnhanced;

export type { ISeries, ISeriesDataType, IenhanceData }


interface IDataTransformOptions {
    transformOptions: ITransformOptions,
    seriesOptions?: ISeriesOptions[],
    enhanceData?: IenhanceData
}

interface FlexiApexChartProps extends Omit<ReactApexChartProps, 'series'>, IDataTransformOptions {
    data: any
}

interface ReactApexChartProps extends ApexChartsType.ApexOptions {
    type: chartType
    width?: string;
    height?: string;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries
    options?: Omit<ApexCharts.ApexOptions, 'series'>
}

export type { ReactApexChartProps, FlexiApexChartProps, IDataTransformOptions, chartType }
