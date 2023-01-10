interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  map<U>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[];
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}

const eachA: Array<number> = [1, 2, 3, 4];
eachA.forEach((item) => console.log(item));

const mapA: Array<number> = [1, 2, 3];
mapA.map((item) => item + 1);

// filter는 type이 2개라서 추론을 제대로 못하는 경우도 있음,
// 결과가 ['2','4'] string인데 타입추론을 제대로 못함.
// is로 타입좁히기
const filterA: Array<number | string> = [1, "2", 3, "4"];
const predicate = (value: number | string): value is string => typeof value === "string";
const filters = filterA.filter(predicate);
