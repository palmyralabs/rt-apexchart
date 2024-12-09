
function keyObjectConverter(colors: string[], data: any[]) {

    const xAxis = Object.keys(data);
    const yAxis = Object.values(data);
    const fillColor = colors?.map((_item: any, i: number) => colors[i]);
    return { xAxis, yAxis, fillColor };


}


export { keyObjectConverter }