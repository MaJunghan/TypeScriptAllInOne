interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  map<U>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[];
}

const eachA: Array<number> = [1, 2, 3, 4];
eachA.forEach((item) => console.log(item));

const mapA = [1, 2, 3].map((item) => item + 1);
