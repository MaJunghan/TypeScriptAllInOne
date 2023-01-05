type A1 = { [key: string]: string };
const aaaa: A1 = {
  a: "3",
  b: "4",
  c: "5",
};

type B1 = "Test1" | "Test2" | "Test3";
type A2 = { [key in B1]: string };
const bbbb: A2 = {
  Test1: "1",
  Test2: "2",
  Test3: "3",
};
