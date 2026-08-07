import { expect, test } from 'vitest';
import { deepEqual } from '../../../../src/palmyra/apexchart/utils/ObjectUtils';

// --- primitives ---

test('deepEqual, identical primitives are equal', () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual('a', 'a')).toBe(true);
    expect(deepEqual(true, true)).toBe(true);
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);
});

test('deepEqual, different primitives are not equal', () => {
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual('a', 'b')).toBe(false);
    expect(deepEqual(true, false)).toBe(false);
    expect(deepEqual(0, false)).toBe(false); // no type coercion
    expect(deepEqual('1', 1)).toBe(false);
});

test('deepEqual, null/undefined are not interchangeable with objects', () => {
    expect(deepEqual(null, {})).toBe(false);
    expect(deepEqual({}, null)).toBe(false);
    expect(deepEqual(undefined, {})).toBe(false);
    expect(deepEqual(null, undefined)).toBe(false);
});

// --- objects ---

test('deepEqual, same reference is always equal (fast path)', () => {
    const obj = { a: 1 };
    expect(deepEqual(obj, obj)).toBe(true);
});

test('deepEqual, different references with same shallow values are equal', () => {
    expect(deepEqual({ a: 1, b: 'x' }, { a: 1, b: 'x' })).toBe(true);
});

test('deepEqual, different references with different values are not equal', () => {
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
});

test('deepEqual, extra key on either side breaks equality', () => {
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    expect(deepEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
});

test('deepEqual, same key count but different key names is not equal', () => {
    expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false);
});

test('deepEqual, deeply nested objects compare by value', () => {
    const a = { x: { y: { z: [1, 2, { w: 'deep' }] } } };
    const b = { x: { y: { z: [1, 2, { w: 'deep' }] } } };
    const c = { x: { y: { z: [1, 2, { w: 'different' }] } } };
    expect(deepEqual(a, b)).toBe(true);
    expect(deepEqual(a, c)).toBe(false);
});

// --- arrays (compared as objects with numeric keys) ---

test('deepEqual, arrays with same values in same order are equal', () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
});

test('deepEqual, arrays with different length are not equal', () => {
    expect(deepEqual([1, 2, 3], [1, 2])).toBe(false);
});

test('deepEqual, arrays with same length but different order are not equal', () => {
    expect(deepEqual([1, 2, 3], [3, 2, 1])).toBe(false);
});

test('deepEqual, array of objects compares each element by value', () => {
    const a = [{ name: 'x', value: 1 }, { name: 'y', value: 2 }];
    const b = [{ name: 'x', value: 1 }, { name: 'y', value: 2 }];
    const c = [{ name: 'x', value: 1 }, { name: 'y', value: 99 }];
    expect(deepEqual(a, b)).toBe(true);
    expect(deepEqual(a, c)).toBe(false);
});

// --- functions ---

test('deepEqual, strict mode (default): identical function reference is equal', () => {
    const fn = () => 1;
    expect(deepEqual(fn, fn)).toBe(true);
});

test('deepEqual, strict mode (default): two distinct functions are never equal, even with identical source', () => {
    const fn1 = (v: number) => v * 2;
    const fn2 = (v: number) => v * 2;
    expect(deepEqual(fn1, fn2)).toBe(false);
});

test('deepEqual, strict mode (default): functions nested in objects follow the same rule', () => {
    const shared = () => 1;
    expect(deepEqual({ formatter: shared }, { formatter: shared })).toBe(true);
    expect(deepEqual({ formatter: () => 1 }, { formatter: () => 1 })).toBe(false);
});

test('deepEqual, ignoreFunctions: true treats any two functions as equal regardless of reference', () => {
    const a = { formatter: (v: number) => v.toFixed(2) };
    const b = { formatter: (v: number) => `${v}` }; // different implementation entirely
    expect(deepEqual(a, b, { ignoreFunctions: true })).toBe(true);
});

test('deepEqual, ignoreFunctions: true still compares the surrounding non-function fields normally', () => {
    const a = { color: 'blue', formatter: () => 1 };
    const b = { color: 'red', formatter: () => 2 };
    expect(deepEqual(a, b, { ignoreFunctions: true })).toBe(false);
});

test('deepEqual, ignoreFunctions: true does not treat a function as equal to a non-function', () => {
    const a = { formatter: () => 1 };
    const b = { formatter: 'not-a-function' };
    expect(deepEqual(a, b, { ignoreFunctions: true })).toBe(false);
});

test('deepEqual, ignoreFunctions defaults to false when options omitted', () => {
    expect(deepEqual(() => 1, () => 1)).toBe(false);
});

// --- circular references ---

test('deepEqual, does not infinite-loop on circular references', () => {
    const a: any = { name: 'a' };
    a.self = a;
    const b: any = { name: 'a' };
    b.self = b;
    expect(() => deepEqual(a, b)).not.toThrow();
});

test('deepEqual, circular reference with differing non-circular fields still returns a boolean without throwing', () => {
    const a: any = { name: 'a' };
    a.self = a;
    const b: any = { name: 'different' };
    b.self = b;
    expect(() => deepEqual(a, b)).not.toThrow();
});
