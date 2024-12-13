import { ReactApexChart } from "./ReactApexChart"


interface ReactApexChartProps extends Omit<ApexCharts.ApexOptions, 'series'> {
    type: ApexChart["type"]
    width?: string;
    height?: string;
    options?: Omit<ApexCharts.ApexOptions, 'series'>
}


const PalmyraApexChart = (props: ReactApexChartProps) => {    
    return <ReactApexChart {...props} series={[]} />
}

export { PalmyraApexChart }