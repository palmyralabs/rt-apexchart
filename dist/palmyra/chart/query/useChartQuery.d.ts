import { IEndPointOptions } from '@palmyralabs/palmyra-wire';
import { RemoteQueryOptions } from './types';
interface Callback {
    onData: (d: any) => void;
    onError?: () => void;
}
declare const useChartQuery: (props: RemoteQueryOptions, callback: Callback) => {
    fetch: () => void;
    setFilter: (filter: any, deferFetch?: boolean) => void;
    setEndPointVars: (options: IEndPointOptions, deferFetch?: boolean) => void;
};
export { useChartQuery };
