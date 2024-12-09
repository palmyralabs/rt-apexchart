import ReactApexChart from "react-apexcharts";
import useChart from "../../../src/palmyra/apexchart/conveter/useChart";

const ArrayRadarChart = () => {

    const { xAxis, yAxis } = useChart({
        endpoint: '/data/ArrayData.json',
        options: {
          type: "array", x: 'month', y: 'value',
        //   colors: ['#9acd32', '#c71585', '#8a2be2', '#ff00ff', '#ff6347', '#48d1cc', '#4169e1', '#9acd32', '#663399']
        }
      },)


  var options:any = {
    series: [{
    name: 'Series 1',
    data: yAxis,
  }],
    chart: {
    height: 350,
    type: 'radar',
  },
  title: {
    text: 'Basic Radar Chart'
  },
  yaxis: {
    stepSize: 20
  },
  xaxis: {
    categories: xAxis
  },
//   colors : fillColor,
  };
  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type="radar" height={350} width={600} />
    </div>
  );
};

export default ArrayRadarChart;
