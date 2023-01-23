function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

type Prams = Parameters<typeof zip>; // 변수는 바로 사용하지 못 하기떄문에 typeof를 앞에붙여야함.
type First = Prams[0]; // 배열형태중에 index로 접근할 수 있음. key를

export {};
