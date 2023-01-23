// required : 인터페이스에서 옵셔널 된 속성들을 필수값으로 변경

// recode : key,value 형식의 타입을 쉽게사용하는 것

interface Obj {
  [key: string]: number;
}

const a: Obj = {
  a: 3,
  b: 4,
  c: 5,
};

const b: Record<string, number> = {
  a: 3,
  b: 4,
  c: 5,
};

export {};

// NonNullable : 기존 type에서 null과 undefined를 빼고 가지고 오고싶을 떄 사용.
