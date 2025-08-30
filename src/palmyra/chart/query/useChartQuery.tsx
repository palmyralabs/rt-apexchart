import { IEndPointOptions, QueryRequest } from "@palmyralabs/palmyra-wire";
import { useContext, useEffect, useState } from "react";
import { ChartStoreFactoryContext } from "./ChartFactoryContext";
import { RemoteQueryOptions } from "./types";

const noop = (d: any) => d;

interface Callback {
    onData: (d: any) => void;
    onError?: () => void;
}

const useChartQuery = (props: RemoteQueryOptions, callback: Callback) => {
    const preProcess = props.preProcess || noop;

    const defaultFilter = {};
    const storeFactory = props.storeFactory || useContext(ChartStoreFactoryContext);

    const [filter, _setFilter] = useState<any>(props.filter);
    const [endPointVars, _setEndPointVars] = useState(props.endPointVars);

    useEffect(() => {
        _setFilter(props.filter);
        _setEndPointVars(props.endPointVars)
    }, [props.filter, props.endPointVars]);

    const getQueryRequest = (): QueryRequest => {
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

    useEffect(() => {
        fetch();
    }, [filter, endPointVars])

    const setEndPointVars = (options: IEndPointOptions, deferFetch: boolean = false) => {
        _setEndPointVars(options);
        if (!deferFetch) {
            fetch();
        }
    }

    const setFilter = (filter: any, deferFetch: boolean = false) => {
        _setFilter(filter);
        if (!deferFetch) {
            fetch();
        }
    }

    return { fetch, setFilter, setEndPointVars }
}

export { useChartQuery };
// export type { AsyncRemoteQueryOptions }