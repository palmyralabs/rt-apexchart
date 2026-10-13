import { useRef } from "react";

const extend = (target, ...sources) => {
    let output = isObject(target) ? { ...target } : {};
    sources.forEach((source) => {
        if (isObject(source)) {
            Object.keys(source).forEach((key) => {
                if (isObject(source[key])) {
                    if (!(key in output)) {
                        Object.assign(output, { [key]: source[key] });
                    } else {
                        output[key] = extend(output[key], source[key]);
                    }
                } else {
                    Object.assign(output, { [key]: source[key] });
                }
            });
        }
    });
    return output;
};
const isObject = (item) => {
    return item && typeof item === "object" && !Array.isArray(item);
};

interface DeepEqualOptions {
    // Function values can only ever be compared by reference, so callers that
    // rebuild inline callbacks every render (e.g. ApexCharts option formatters)
    // would otherwise always be seen as "changed". Set this when the comparison
    // is a render/update heuristic, not a correctness-critical memo key -
    // i.e. never for inputs that determine the actual computed output.
    ignoreFunctions?: boolean;
}

const deepEqual = (
    obj1: any,
    obj2: any,
    options: DeepEqualOptions = {},
    visited = new WeakSet()
): boolean => {
    if (obj1 === obj2) return true;

    if (options.ignoreFunctions && typeof obj1 === 'function' && typeof obj2 === 'function') {
        return true;
    }

    if (
        typeof obj1 !== 'object' ||
        obj1 === null ||
        typeof obj2 !== 'object' ||
        obj2 === null
    ) {
        return false;
    }

    if (visited.has(obj1) || visited.has(obj2)) return true; // Handle circular refs
    visited.add(obj1);
    visited.add(obj2);

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key], options, visited)) {
            return false;
        }
    }

    return true;
};

interface DeepMemoEntry<T> {
    deps: any[];
    value: T;
}

// Pure decision logic, deliberately separated from the useRef binding below so
// it can be unit-tested without a React renderer: given the previous cached
// entry (or null on first call) and the new deps, decide whether to reuse the
// cached value or invoke factory() again.
function computeDeepMemo<T>(
    prev: DeepMemoEntry<T> | null,
    factory: () => T,
    deps: any[]
): DeepMemoEntry<T> {
    if (!prev || !deepEqual(prev.deps, deps)) {
        return { deps, value: factory() };
    }
    return prev;
}

// Value-based memoization: unlike useMemo (which invalidates on ANY new
// dependency reference, even when the values are unchanged), this recomputes
// only when the dependency VALUES actually differ. Needed because callers of
// this library routinely pass fresh object/array literals on every render.
// Deps must not rely on function-value changes to signal a real difference -
// two different functions are only distinguishable by reference here.
function useDeepMemo<T>(factory: () => T, deps: any[]): T {
    const ref = useRef<DeepMemoEntry<T> | null>(null);
    ref.current = computeDeepMemo(ref.current, factory, deps);
    return ref.current.value;
}

export { extend, deepEqual, useDeepMemo, computeDeepMemo };
export type { DeepMemoEntry };