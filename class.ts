/*
class ClassA {
  a: string;
  b: number;

  constructor() {
    (this.a = "123"), (this.b = 123);
  }
}
*/

// 위의 생성자 기반에서 이렇게 생략되어서 사용하는것임.
interface ClassA {
  a: string;
  b: number;
}

class ClassB implements ClassA {
  a: string = "123";
  b: number = 123;
  c: string = "wow";

  method() {
    console.log(this.a);
  }
}

// class는 extends 구현
// interface는 implements 구현

// private : 상속접근x 인스턴스 접근x
// protected : 상속접근O, 인스턴스 접근X
// public : 상속접근 O, 인스턴스 접근O
