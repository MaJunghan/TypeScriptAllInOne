const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => {
  return input.status === "rejected";
};

const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => {
  return input.status === "fulfilled";
};

// Promise -> Panding -> Settled(Fulfilled, Rejected)
//            완료가 아직안됨 -> 완료인상태 (성공인지 실패인지는 fulilled ,rejected)

// allSettled : 병렬적으러 여러개의 요청을 처리하기위한 방법, 안정적 => 이걸 더 많이 쓰는 추세로 변경되고있음.
const promises = await Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
]);
const errors = promises.filter(isRejected);
//                          => 타입 좁히기 PromiseRejectedResult

export {};
