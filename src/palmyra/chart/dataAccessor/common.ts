import { getValueByKey, hasDot } from "@palmyralabs/ts-utils";
import { accessor, AttributeAccessor } from "./types";

function getAccessors(yKey: AttributeAccessor | AttributeAccessor[]): accessor<any>[] {
    const yKeys = (yKey instanceof Array) ? yKey : (yKey ? [yKey] : ['value'])
    const result = yKeys.map((yKey) => getAccessor(yKey))
    return result;
}

function getAccessor(v: AttributeAccessor): accessor<any> {
    if (v instanceof Function || typeof v == 'function') {
        return v;
    }
    else if (typeof v == 'string') {
        // @ts-ignore
        const key: string = v;
        const accessor = hasDot(key) ? (data: any) => (getValueByKey(key, data)) : (data: any) => (data[key]);
        return accessor;
    }
    console.error('Invalid attribute accessor', v);
    throw Error('Invalid Attribute Accessor  ');
}


export { getAccessor, getAccessors }