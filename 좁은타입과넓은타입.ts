// type A = string | number;   => 넓은타입
// type B = string;  => 좁은타입

type ObjA = { name: string };
type ObjB = { age: number };
type ObjC = ObjA & ObjB;

const typec: ObjC = {
  name: "d",
  age: 23,
  // married: false,
};

// 객체는 속성들이 많을수록 더 상세하기떄문에 좁다
