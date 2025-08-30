import { IEndPointOptions } from '@palmyralabs/palmyra-wire';
import { RemoteQueryOptions } from './types';
interface Callback {
    onData: (d: any) => void;
    onError?: () => void;
}
declare const useChartQuery: (props: RemoteQueryOptions, callback: Callback) => {
    setFilter: (filter: any) => void;
    setEndPointVars: (options: IEndPointOptions) => void;
};
export { useChartQuery };
