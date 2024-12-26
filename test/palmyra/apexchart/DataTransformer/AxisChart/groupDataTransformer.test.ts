import { expect, test } from 'vitest';
import { IOptions, useDataTransformer } from '../../../../../src/palmyra/apexchart/DataTransformer';
import { ITransformOptions } from '../../../../../src/palmyra/chart';
import getGroupAxisChartConsumer from '../../../../../src/palmyra/apexchart/utils/GroupAxisChartConsumer';
import { group } from 'console';
import { groupStackValueProperty } from 'ag-charts-community/dist/types/src/module-support';
import { year } from 'ag-charts-community/dist/types/src/sparklines-util';


test('Group Data Transformer, DefaultKeys', () => {
    const data = [
        { name: 'Marine Sprite', value: 44, year: 2008 },
        { name: 'Marine Sprite', value: 55, year: 2009 },
        { name: 'Marine Sprite', value: 41, year: 2010 },
        { name: 'Striking Calf', value: 53, year: 2008 },
        { name: 'Striking Calf', value: 32, year: 2009 },
        { name: 'Striking Calf', value: 33, year: 2010 },
    ];

    const getChartConsumer = getGroupAxisChartConsumer;
    // const transformOptions = {}

    const transformOptions: ITransformOptions = { xKey: 'year', yKey: ['value'], groupKey: 'name' }
    const transformer = useDataTransformer('bar', { transformOptions, getChartConsumer });
    const actual = transformer.transform(data);

    const expected = {
        series:
            [
                {
                    name: 'Marine Sprite',
                    data: [44, 55, 41]
                },
                {
                    name: 'Striking Calf',
                    data: [53, 32, 33]
                }
            ],
        xaxis: {
            categories: [2008, 2009, 2010],
        },
    }

    console.log("expect", expect)
    console.log("actual", actual)
    expect(actual).toEqual(expected)
})



  