interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  map<U>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[];
  filter<S extends number>(
    predicate: (value: number, index: number, array: number[]) => value is number,
    thisArg?: any
  ): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}

const eachA: Array<number> = [1, 2, 3, 4];
eachA.forEach((item) => console.log(item));

const mapA: Array<number> = [1, 2, 3];
mapA.map((item) => item + 1);

// filter는 type이 2개라서 추론을 제대로 못하는 경우도 있음,
const filterA: Array<number> = [1, 2, 3, 4];
filterA.filter((item) => item % 2 === 1);
