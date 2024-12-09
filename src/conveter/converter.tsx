const simpleBarConverter = (xName: string = 'x', yName: string = 'y') => {
    const convert = (rawData: any[], index:number) => {
        const xAxis = rawData.map((data) => data[xName]);
        const yAxis = rawData.map((data) => data[yName]);
        const fillColor = rawData.map((data) => data[index])
        return { xAxis, yAxis ,fillColor};
    };

    return convert;
};
export default simpleBarConverter;
