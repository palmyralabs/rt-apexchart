import moment from "moment";

function ObjectkeyedConverter(options: { x: string, y1: string, y2: string, colors: string[] }, data: any[]) {
    const chartData = Object.values(data).map((item, index: number) => {
      console.log("da",data)
        return {
            x: Object.keys(data),
            // // y: [
            // //   Object.values(moment([options.y1]).toDate().getTime()),
            // //   (moment([options.y2]).toDate().getTime())
            // // ],
            y:Object.values(data).map(item => item[options.y1]),
            colors: options.colors[index % options.colors.length]
        }
        
    });
    console.log("datass", chartData)
    return { chartData }
}

export { ObjectkeyedConverter };


