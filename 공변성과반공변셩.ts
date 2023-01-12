function a(x: string): number {
  // (x:string) => string | number 이고, B가 number일경우, number는 되는데 string은 안되기 떄문에.
  return +x;
}

type B = (x: string) => number | string;
const b: B = a;

// return 타입은 더 넓은 타입으로 리턴가능
// 반대로는 불가
// why?
// return 타입은 좁은타입에서 넓은타입으로 대입가능
// 매개변수는 넓은타입에서 좁은타입으로 대입가능
// => 두개의 요건을 만족해야 대입가능

export {};
