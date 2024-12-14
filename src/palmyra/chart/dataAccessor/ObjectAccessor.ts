import { getAccessor, getAccessors } from "./common";
import { accessor, IChartConsumerOptions, ITransformOptions } from "./types";


const generateObjectAccessors = (options: ITransformOptions): IChartConsumerOptions => {
    const xKeyAccessor = getXKeyAccessor(options);
    const yKeyAccessors = getYKeyAccessors(options);

    var result = { xKeyAccessor, yKeyAccessors };
    return result;
}

const getXKeyAccessor = (options: ITransformOptions): accessor<any> => {
    if (options.dataType == 'object') {
        return (d: any, k?: string) => k;
    } else {
        const xKey = options.xKey || 'name';
        return getAccessor(xKey);
    }
}

const getYKeyAccessors = (options: ITransformOptions): accessor<any>[] => {
    const yKey = options.yKey || 'value';
    return getAccessors(yKey);
}

export default generateObjectAccessors;