interface Maps<T> {
  map<S>(callback: (item: T) => S): S[];
}

const customMap: Maps<number> = [1, 2, 3];
const a = customMap.map((item) => item + 1);
const b = customMap.map((item) => item.toString()); // 만약 number를 가공해서 string으로 변경하고 싶다면?
const d = customMap.map((item) => item % 2 === 0); // [false, true, flase]

const e: Maps<string> = ["1", "2", "3", "4"];
const f = e.map((item) => item);
export {};
