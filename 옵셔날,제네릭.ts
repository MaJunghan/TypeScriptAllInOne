/*
? 옵셔날 : 무조건 적으로오는값이 아닌 선택에 따라서.

function abc(a: number, b?: number, c?: number) {}

abc(1);
abc(1,2,3);

*/

// 제네릭 : 지금 타입이 뭔지 모르겠는데, 나중에 정할게!

function generic<T extends string | number>(a: T) {
  console.log(a);
}

generic("1");
generic(1);

// const names = (a: { name: string } = { name: "junghan" }) => {
//   console.log(a);
// };

// names();
