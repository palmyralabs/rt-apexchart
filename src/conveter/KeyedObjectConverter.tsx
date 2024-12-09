function keyedObjectConverter( y: string, colors: string[], data: any[]) {
    const xAxis = Object.keys(data);
    const yAxis = Object.values(data).map(item => item[y]);
    console.log("data", Object.keys(data))
    const fillColor = colors?.map((_item: any, i: number) => colors[i]);
    return { xAxis, yAxis, fillColor };
  };

  export { keyedObjectConverter }