interface Arr<T> {
  filter<S extends T>(callback: (item: T) => item is S): S[];
}

const a: Arr<number> = [1, 2, 3];
const b = a.filter((item): item is number => item % 2 === 0);

const c: Arr<number | string> = [1, "2", 3, "4", 5];
const d = c.filter((item): item is string => typeof item === "string");
const e = c.filter((item): item is number => typeof item === "number");

export {};
