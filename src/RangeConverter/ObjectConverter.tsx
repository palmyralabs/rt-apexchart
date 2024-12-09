import moment from "moment";

function ObjectConverter(options: { x: string, y1: string, y2: string, colors: string[] }, data: any[]) {
    const chartData = Object.values(data).map((item, index: number) => {
        return {
            x: item[options.x],
            y: [
                moment(item[options.y1]).toDate().getTime(),
                moment(item[options.y2]).toDate().getTime()
            ],
            colors: options.colors[index % options.colors.length]

        }
        });
        return { chartData}
}


export { ObjectConverter };
