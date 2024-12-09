import axios from "axios";
import { useEffect, useState } from "react";
import { arrayConverter } from "./ArrayConverter";
import { ObjectkeyedConverter } from "./keyedConverter";
import { ObjectConverter } from "./ObjectConverter";
import { keyObjectConverter } from "./KeyConverter";



interface ChartOptions {
  type: string;
  x: string;
  y1: string;
  y2: string
  colors: any
}

interface UseChartProps {
  endpoint: string;
  options: ChartOptions;
}

function UseRangeChart({ endpoint, options }: UseChartProps) {
  const [data, setData] = useState<any[]>([]);

  const fetchData = () => {
    axios.get(endpoint)
      .then((response: any) => {
        console.log(endpoint, "res", response);
        setData(response.data.result);
      });
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]); 


  // var url = endpoint;

//  axios({
//   method: 'GET',
//   url: url,
// }).then(function(response) {
//   chart.updateSeries([{
//     data: response.data
//   }])
// })
  // const useRefreshableChart = (endpoint: string) => {
  //   const [data, setData] = useState<any[]>([]);

  //   const fetchData = () => {
  //     axios.get(endpoint)
  //       .then((response) => {
  //         setData(response.data.result);
  //       });
        
  //   };

  //   useEffect(() => {
  //     fetchData(); // Initial data load
  //   }, [endpoint]);

  //   return { data, refresh: fetchData };
  // };






  switch (options.type) {
    case "array":
      return arrayConverter(options, data);

    case "object":
      return ObjectConverter(options, data);
    case "keyValue":
      return keyObjectConverter(options, data);

    case "keyedValue":
      return ObjectkeyedConverter(options, data);

    default:
      return arrayConverter(options, data);
  }



  // if (options.type == "keyedValue")
  //   return ObjectkeyedConverter(options, data);
  // else
  //   return arrayConverter(options, data);
}
export default UseRangeChart;

