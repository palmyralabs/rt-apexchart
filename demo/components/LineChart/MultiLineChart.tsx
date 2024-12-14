import { FlexiApexChart } from "../../../src/main";
import { IenhanceData } from "../../../src/palmyra/apexchart/types";
import { ResultType } from "../../../src/palmyra/chart";

const MultiLineChart = () => {

    const enhanceData: IenhanceData = (xValue: ResultType,
        yValue: number, value: any, dataIndex: number,
        seriesIndex: number, key: string) => {

        if (yValue < 5)
            return { fillColor: 'red' };
        else
            return {}
    }

    return (
        <div id="chart">
            <FlexiApexChart transformOptions={{
                xKey: 'month', yKey: ['value', 'min', 'max'],
                dataType: 'object'
            }}
                data={data} type="bar"
                // options={{ legend: { position: "top" } }}
                legend={{ position: "top" }}
                seriesOptions={[
                    { name: 'Value' },
                    { name: 'Minimum' },
                    { name: 'Maximum' }
                ]}
                enhanceData={enhanceData}
            />
        </div>
    );

}
export default MultiLineChart


const data = {
    "one": {
        "value": 5,
        "min": 4,
        "values": 20,
        "max": 2,
        "month": "Jan"
    },
    "two": {
        "value": 10,
        "min": 3,
        "values": 20,
        "max": 3,
        "month": "Feb"
    },
    "three": {
        "value": 6,
        "min": 6,
        "values": 35,
        "max": 11,
        "month": "Mar"
    },
    "four": {
        "value": 20,
        "min": 8,
        "values": 60,
        "max": 14,
        "month": "Apr"
    },
    "five": {
        "value": 18,
        "min": 26,
        "values": 3,
        "max": 6,
        "month": "May"
    },
    "six": {
        "value": 27,
        "min": 8,
        "values": 56,
        "max": 1,
        "month": "June"
    },
    "seven": {
        "value": 10,
        "min": 40,
        "values": 9,
        "max": 3,
        "month": "July"
    },
    "eight": {
        "value": 35,
        "min": 22,
        "values": 43,
        "max": 2,
        "month": "Agu"
    },
    "ninen": {
        "value": 40,
        "min": 13,
        "values": 5,
        "max": 4,
        "month": "sept"
    },
    "ten": {
        "value": 30,
        "min": 19,
        "values": 33,
        "max": 1,
        "month": "oct"
    },
    "leven": {
        "value": 10,
        "min": 40,
        "values": 21,
        "max": 5,
        "month": "Nov"
    },
    "twelve": {
        "value": 5,
        "min": 3,
        "max": 10,
        "values": 54,
        "month": "Dec"
    }
}