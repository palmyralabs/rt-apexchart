import ReactApexChart from "react-apexcharts";
import useChart from "../../conveter/useChart";


const KeyBarChart = () => {

    const { xAxis, yAxis, fillColor } = useChart({
        endpoint: '/data/KeyValueData.json',
        options: {
          type: "keyValue", x: 'month', y: 'value',
          colors: ['#9acd32', '#c71585', '#8a2be2', '#ff00ff', '#ff6347', '#48d1cc', '#4169e1', '#9acd32', '#663399']
        }
      },)
      const options: any = {
        series: [{
          data: yAxis
        }],
        annotations: {
          points: [{
            x: 'Bananas',
            seriesIndex: 0,
            label: {
              borderColor: '#775DD0',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#775DD0',
              },
              // text: 'Bananas are good',
            }
          }]
        },
        chart: {
          height: 500,
          type: 'bar',
          boxshadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        },
        colors: fillColor,
        plotOptions: {
          bar: {
            borderRadius: 10,
            columnWidth: '50%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 0
        },
        title: {
          text: 'Bar Chart',
          align: 'Center',
          fontSize: '100px',
          fontWeight: 'bold',
        },
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: xAxis,
          // tickPlacement: 'off'
        },
        yaxis: {
          title: {
            text: 'value',
    
          },
        },
        fill: {
          type: 'gradient',
    
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100],
            // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          },
    
        }
      };
      return (
        <div id="chart">
          <ReactApexChart options={options} series={options.series} type="bar" height={350} width={600} />
        </div>
      );
    
    };
export default KeyBarChart;
