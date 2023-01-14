// Pick : type에서 선택한 값만 가져와서 사용하는 것 << == >> Omit : type에서 선택한 값을  제외하는것

interface Profile {
  name: string;
  age: number;
  married: boolean;
}
type Name = Profile["name"];

type P<T, S extends keyof S> = {
  [key in S]: T[key];
};

const junghan: P<Profile, "name" | "age"> = {
  name: "junghan",
  age: 32,
};

export {};
