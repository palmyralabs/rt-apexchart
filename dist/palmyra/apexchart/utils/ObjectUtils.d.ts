declare const extend: (target: any, ...sources: any[]) => any;
interface DeepEqualOptions {
    ignoreFunctions?: boolean;
}
declare const deepEqual: (obj1: any, obj2: any, options?: DeepEqualOptions, visited?: WeakSet<object>) => boolean;
interface DeepMemoEntry<T> {
    deps: any[];
    value: T;
}
declare function computeDeepMemo<T>(prev: DeepMemoEntry<T> | null, factory: () => T, deps: any[]): DeepMemoEntry<T>;
declare function useDeepMemo<T>(factory: () => T, deps: any[]): T;
export { extend, deepEqual, useDeepMemo, computeDeepMemo };
export type { DeepMemoEntry };
