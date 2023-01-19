interface Profile {
  name: string;
  age: number;
  married: boolean;
}

type A = Exclude<Profile, "mreeied">; // exclud : 해당타입에서 해당 key를 제외시킴
type B = Extract<Profile, "age">; // extract : 해당타입에서 해당 key를 추출함

export {};
