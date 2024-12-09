import moment from "moment";

function keyObjectConverter(options: { x: string, y1: string, y2: string, colors: string[] }, data: any[]) {
    const chartData = Object.values(data).map((item, index: number) => {
        return {
            x: Object.keys(options.x),
            y: [
                Object.values(moment([options.y1]).toDate().getTime()),
                (moment([options.y2]).toDate().getTime())
            ],
            colors: options.colors[index % options.colors.length]

        }
    });
    console.log("datass", chartData)
    return { chartData }

}

export { keyObjectConverter };