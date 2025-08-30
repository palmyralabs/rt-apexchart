import { IEndPointOptions, QueryRequest } from "@palmyralabs/palmyra-wire";
import { useContext, useRef } from "react";
import { RemoteQueryOptions } from "./types";
import { ChartStoreFactoryContext } from "./ChartFactoryContext";

const noop = (d: any) => d;

interface Callback {
    onData: (d: any) => void;
    onError?: () => void;
}

const useChartQuery = (props: RemoteQueryOptions, callback: Callback) => {
    const ev = useRef<IEndPointOptions>(props.endPointVars || {});
    const filterRef = useRef<any>(props.filter || {});
    const preProcess = props.preProcess || noop;

    const defaultFilter = {};
    const storeFactory = props.storeFactory || useContext(ChartStoreFactoryContext);

    const getQueryRequest = (): QueryRequest => {
        const endPointVars = ev.current;
        const filter = filterRef.current;
        const params: QueryRequest = {
            endPointVars, filter: { ...filter, ...defaultFilter }
        };
        return params;
    }

    const setResult = (result: any) => {
        callback.onData(result);
    }

    const setEmptyData = () => {
        if (callback.onError)
            callback.onError();
    }

    const setNoData = () => {
        setResult(preProcess(undefined));
    }

    const fetch = () => {
        const params: QueryRequest = getQueryRequest();

        if (storeFactory) {
            try {
                storeFactory.getChartStore({}, props.endPoint).query(params).then((d: any) => {
                    setResult(preProcess(d));
                }).catch((e) => {
                    var r = e.response ? e.response : e;
                    console.error("error while fetching", r);
                    setNoData();
                });
            } catch (e) {
                console.error(e);
                setEmptyData();
            }
        } else {
            console.error("Store is not provided for the Grid");
            setEmptyData();
        }
    }

    const setEndPointVars = (options: IEndPointOptions, deferFetch: boolean = false) => {
        ev.current = options;
        if (!deferFetch) {
            // fetch();
        }
    }

    const setFilter = (filter: any, deferFetch: boolean = false) => {
        filterRef.current = filter;
        if (!deferFetch) {
            // fetch();
        }
    }

    return { fetch, setFilter, setEndPointVars }
}

export { useChartQuery }
// export type { AsyncRemoteQueryOptions }