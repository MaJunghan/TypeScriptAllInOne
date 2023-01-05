function numOrStr(a: number | string) {
  if (typeof a === "number") {
    a.toFixed(1);
  } else {
    // string
    a.charAt(3);
  }
  if (typeof a === "string") {
    a.charAt(3);
  }
  /*
   if (typeof a === "boolen")  { => type : naver   매개변수는 number,string인데 말도안되는 type을 설정한경우.
  }

  */
}

numOrStr("123");
numOrStr(1);

function numOrNumArr(b: number | number[]) {
  // 배열 확인법
  if (Array.isArray(b)) {
    // number [] array
    b.concat(4);
  } else {
    // number
    b.toFixed(3);
  }
}

numOrNumArr(123);
numOrNumArr([1, 2, 3]);

// class
// class 그자체면 typeof로 구분해줘야함.
// 인스턴스면 if( instanceof A)

// 객체의 type 구별법
type E = { type: "b"; bbb: string };
type R = { type: "c"; ccc: string };
type T = { type: "d"; ddd: string };

function typeCheck(a: E | R | T) {
  /* 값으로 구분하는방법 (더 많이 사용함)
  
  if (a.type === "b") {
    a.bbb;
  }
  if (a.type === "c") {
    a.ccc;
  }
  */

  if ("bbb" in a) {
    // a라는 속성안에 bbb가 있으면!
    a.type;
  }
}
