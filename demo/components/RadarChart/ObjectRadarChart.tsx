import ReactApexChart from "react-apexcharts";
import useChart from "../../../src/palmyra/apexchart/conveter/useChart";

const ObjectRadarChart = () => {

    const { xAxis, yAxis } = useChart({
        endpoint: '/data/ObjectData.json',
        options: {
          type: "object", x: 'month', y: 'value',
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

export default ObjectRadarChart;
