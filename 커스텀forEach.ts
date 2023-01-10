interface Arr<T> {
  forEach(callback: (callback: T, index: number) => void): void;
}

const foreachA: Arr<number> = [1, 2, 3, 4];
foreachA.forEach((item, index) => {
  console.log(item);
});

const foreachB: Arr<string> = ["1", "2", "3", "4"];
foreachB.forEach((item) => {
  console.log(item.toString);
});
