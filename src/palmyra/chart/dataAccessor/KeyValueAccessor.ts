import { getAccessor } from "./common";
import { accessor, IChartConsumerOptions, ITransformOptions } from "./types";


const generateKeyValueAccessors = (options: ITransformOptions): IChartConsumerOptions => {
    const xKeyAccessor = getXKeyAccessor(options);
    const yKeyAccessors = getYKeyAccessors(options);
    
    var result = { xKeyAccessor, yKeyAccessors };
    return result;
}

const getXKeyAccessor = (options: ITransformOptions): accessor<any> => {
    const xKey = options.xKey || 'key';
    return getAccessor(xKey);
}


const getYKeyAccessors = (options: ITransformOptions): accessor<any>[] => {
    return [(d: any, k?: string) => d[k]];
}

export default generateKeyValueAccessors;