// enum 여러가지 변수들을 그룹으로 묶고 싶을떄

const enum Edirection {
  Up,
  Down,
  Left,
  Right,
}

const enumA = Edirection.Up; // 0

// 제로초님은 객체로 묶는것을 좋아함
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
// as const 쓰면은 read only => 이값을 상수로 사용하겠다.

const obj2 = {
  a: "123",
  b: "hello",
  c: "world",
} as const;

// obj2의 객체를 타입으로 사용하기위해 typeof라고 붙여서 타입이라고 설정
type Key = keyof typeof obj2; // key만가져오기
type Value = typeof obj2[keyof typeof obj2]; // value만 가져오기
