
function objectConvert(x: string, y: string, colors: string[], data: any[]) {
    const xAxis = Object.values(data).map(item => item[x]);
    const yAxis = Object.values(data).map(item => item[y]);
    const fillColor = colors?.map((_item: any, i: any) => colors[i])
    return { xAxis, yAxis, fillColor };
};
export { objectConvert }