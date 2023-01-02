type A = {
  a: string;
};
const testa: A = {
  a: "hello",
};

interface B {
  a: string;
}
const testb: B = {
  a: "hello",
};

// function unionAdd(x: string | number, y: string | number): string | number {
//   return x + y;
// }

// const result: string | number = add(1, 2);

type InterSection = { hello: "world" } & { zero: "cho" };
const InterA: InterSection = { hello: "world", zero: "cho" };
