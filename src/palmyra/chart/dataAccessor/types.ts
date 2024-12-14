
interface ITransformOptions {
    xKey?: AttributeAccessor,
    yKey?: AttributeAccessor | AttributeAccessor[],
    xLabel?: LabelAccessor;
    yLabel?: LabelAccessor[] | LabelAccessor;
    groupKey?: AttributeAccessor;
    rKey?: AttributeAccessor
    rLabel?: AttributeAccessor,
    dataType?: 'object' | 'array' | 'keyValue';
}

interface ISeriesOptions extends Omit<ApexAxisChartSeries[0], "data">{

}

interface IChartConsumerOptions {
    xKeyAccessor: accessor<ResultType>,
    xLabelAccessor?: accessor<string>;
    yKeyAccessors: accessor<ResultType>[],
    yLabelAccessors?: accessor<string>[];
    rKeyAccessor?: accessor<ResultType>;
    rLabelAccessor?: accessor<string>;
    groupKey?: accessor<ResultType>;
}


type accessor<T> = (d: any, k?: string) => T;
type ResultType = string | number | Date;
type AttributeAccessor = string | accessor<ResultType>;
type LabelAccessor = string | accessor<string>;

export type { accessor, ResultType, AttributeAccessor, LabelAccessor, ITransformOptions }

export type { IChartConsumerOptions, ISeriesOptions }