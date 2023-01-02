// type naver : 빈배열 값을 할당할 수 없음
// const array = []; naver type의 경우 값 할당 할 수 없음 => 반드시 타입지정
// array.push("qewq");

// let array: string[] = [];
// array.push("heelo");

// ! : undefined가 아닌것을 보증함 => 무조건 있다. (비추)
// const head = document.querySelector("#head");
// if (head) {
//   head.innerHTML = "hello";
// }

// type World = "world";
// const testa: World = "world";
// type Greeting = `hello ${World}`;

// function rest(...args: string[]) {
//   console.log(args);
// }

// rest("1", "2", "3");

const tuple: [string, number] = ["1", 2];
// tuple[2] = 'heelo'
tuple.push("hello");
