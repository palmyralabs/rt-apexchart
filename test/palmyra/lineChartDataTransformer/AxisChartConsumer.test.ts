import { expect, test } from "vitest";
import { ITransformOptions } from "../../../src/main";
import { useDataTransformer } from "../../../src/palmyra/apexchart/DataTransformer";
import getChartConsumer from "../../../src/palmyra/apexchart/utils/AxisChartConsumer";

test('AxisChartConsumer Transformer, DefaultKeys', () => {
    const data = [
        { month: 'Jan', value: 10 },
        { month: 'Feb', value: 41 },
        { month: 'Mar', value: 35 },
        { month: 'Apr', value: 51 },
        { month: 'May', value: 49 },
        { month: 'Jun', value: 62 },
    ];


    const transformOptions: ITransformOptions = {}
    const transformer = useDataTransformer('line', { transformOptions, getChartConsumer });
    const actual = transformer.transform(data);


    const expected = {
        series:
            [
                {
                    data: [10, 41, 35, 51, 49, 62,]
                },
            ],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        }
    }
    expect(actual).toEqual(expected)
})


test('AxisChartConsumer, DefaultKeys', () => {
    const data = [
        { month: 'Jan', value: 10 },
        { month: 'Feb', value: 41 },
        { month: 'Mar', value: 35 },
        { month: 'Apr', value: 51 },
        { month: 'May', value: 49 },
        { month: 'Jun', value: 62 },
    ];
    const transformOptions: ITransformOptions = {}
    const transformer = useDataTransformer('line', { transformOptions });
    const actual = transformer.transform(data);

    const expected = {
        series: [{
            data: [
                { x: 'Jan', y: 10 },
                { x: 'Feb', y: 41 },
                { x: 'Mar', y: 35 },
                { x: 'Apr', y: 51 },
                { x: 'May', y: 49 },
                { x: 'Jun', y: 62 }
            ]
        }]
    }
    expect(actual).toEqual(expected)
})
test('AxisChartConsumer, DefaultKeyss', () => {
    const data = [
        { name: 'Jan', value: 10 },
        { name: 'Feb', value: 41 },
        { name: 'Mar', value: 35 },
        { name: 'Apr', value: 51 },

    ];
    const transformOptions: ITransformOptions = {}
    const transformer = useDataTransformer('line', { transformOptions });
    const actual = transformer.transform(data);

    const expected = {
        series: [{
            data: [
                { x: 'Jan', y: 10 },
                { x: 'Feb', y: 41 },
                { x: 'Mar', y: 35 },
                { x: 'Apr', y: 51 },
            ]
        }]
    }
    expect(actual).toEqual(expected)
})
