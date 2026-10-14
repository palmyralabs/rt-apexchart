import * as ApexChartsNs from 'apexcharts';

declare global {
    type ApexChart = NonNullable<ApexChartsNs.ApexOptions['chart']>;

    type ApexAxisChartSeries = {
        name?: string;
        type?: string;
        color?: string;
        group?: string;
        zIndex?: number;
        data: any[];
    }[];

    type ApexNonAxisChartSeries = number[];

    type ApexFill = NonNullable<ApexChartsNs.ApexOptions['fill']>;
}

export {};
