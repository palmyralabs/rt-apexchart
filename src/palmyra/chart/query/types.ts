import { ChartStoreFactory, IEndPoint, IEndPointOptions } from "@palmyralabs/palmyra-wire"

interface RemoteQueryOptions extends QueryOptions {
    storeFactory?: ChartStoreFactory<any, any>,
    endPoint: IEndPoint,
    endPointVars?: IEndPointOptions,
    preProcess?: <T, X>(d: T | undefined) => X | undefined
}

interface QueryOptions {
    filter?: Record<string, any>
    sortOrder?: Record<string, "asc" | "desc" | undefined>;
}

export type { QueryOptions, RemoteQueryOptions }