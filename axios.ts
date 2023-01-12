interface Axios {
  get(): void;
}
class CustomError extends Error {
  response?: {
    data: any;
  };
}

declare const axios: Axios;

async () => {
  try {
    await axios.get();
  } catch (err) {
    // unKnown 일떈 as 로 타입을 확정지어줘야함.
    // 하지만 이 방법은 굉장히 안좋은 방법
    //   const CustomError = err as CustomError;
    //   console.error(CustomError.response?.data);
    // 인터페이스는 js변환시 없어지기떄문에 체크하기위해서 class
    if (err instanceof CustomError) {
      console.error(err.response?.data);
      err.response?.data;
    }
    // =>>>>>>>>>>> class로 인스턴스 체크하는방법이 올바른 방법
  }
};

export {};
