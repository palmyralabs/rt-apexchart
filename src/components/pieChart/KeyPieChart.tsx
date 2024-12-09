import ReactApexChart from "react-apexcharts";
import useChart from "../../conveter/useChart";


const KeyPieChart = () => {

  const { xAxis, yAxis, fillColor } = useChart({
    endpoint: '/data/KeyValueData.json',
    options: {
      type: "keyValue", x: 'month', y: 'value',
      colors: ['#9acd32', '#c71585', '#8a2be2', '#ff00ff', '#ff6347', '#48d1cc', '#4169e1', '#9acd32', '#663399']
    }
  },)


  var options: any = {
    series: yAxis,
    chart: {
      width: 380,
      type: 'pie',
    },
    title: {
      text: 'pie Chart',
      align: 'Center',
      fontSize: '100px',
      fontWeight: 'bold',
    },
    labels: xAxis,
    colors: fillColor,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }
    ]
  };
  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type="pie" height={250} width={600} />
    </div>
  );
};

export default KeyPieChart;
