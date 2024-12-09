import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { objectConvert } from "./ObjectConverter";
import { keyObjectConverter } from "./keyObjectConverter";
import { keyedObjectConverter } from "./KeyedObjectConverter";
import { arrayConverter } from "./ArrayConverter";

interface ChartOptions {
  type: string;
  x: string;
  y: string;
  colors?: any
}

interface UseChartProps {
  endpoint: string;
  options: ChartOptions;
}

function useChart({ endpoint, options }: UseChartProps) {
  const [data, setData] = useState<any[]>([]);
  const chartRef = useRef();

  useEffect(() => {
    axios.get(endpoint).then((response: any) => {
      setData(response.data.result);
      console.log("responsee", response)

    });
  }, [endpoint, chartRef]);
  console.log(data)


  switch (options.type) {
    case "array":
      return arrayConverter(options.x, options.y, options.colors, data);


    case "object":
      return objectConvert(options.x, options.y, options.colors, data);

    case "keyValue":
      return keyObjectConverter(options.colors, data);

    case "keyedValue":
      return keyedObjectConverter(options.y, options.colors, data);

    default:
      return arrayConverter(options.x, options.y, options.colors, data);
  }
}
export default useChart;