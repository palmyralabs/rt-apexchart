
function arrayConverter(x: string, y: string, colors: string[], data: any[]) {
    const xAxis = data.map((item) => item[x]);
    const yAxis = data.map((item) => item[y]);
    const fillColor = colors?.map((_item: any, i: any) => colors[i])
    return { xAxis, yAxis, fillColor };
   
}

export { arrayConverter }

