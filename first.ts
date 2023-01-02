// 자바스크립트에 변수, 매개변수, 리턴값만 타입붙인것.

const a: string = "5";
const b = 5;
const c: boolean = false;
const d: undefined = undefined;
const e: null = null;
const f: any = 5; // javascript

// 함수형
// function add(x: number, y: number): number {
//   return x + y;
// }

// 화살표함수
// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;

// 인터페이스
// interface Add {
//   (x: number, y: number): number;
// }
const add = (x: number, y: number) => x + y;
const reuslt = add(1, 2);

// 객체
const obj = {
  lat: 37.5,
  lon: 127.5,
};

// 배열
const arr = ["123", "456"];
const arr2 = [123, 456];

// 튜플 : 자료형이 섞여있고, 길이가 고정
const arr3: [number, number, string] = [1, 2, "3"];

// 타입에 원시값을 적용할 수 있음.
// const는 상수라 바뀔것이 없어서, 최대한 정확하게!
const ex1: true = true;
const ex2: 5 = 5;

// 결론1 : 추론을 잘하는경우에는 타입을 굳이 적을 필요없음.
// 결론2 : 타입추론은 최대한 정확하게  ex) const b = 5 => type 5 더 정확함.
