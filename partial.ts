interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const junghan: Profile = {
  name: "junghan",
  age: 32,
  married: true,
};

const newJunghan: Partial<Profile> = {
  // Partial : type을 전부 옵셔널로 변경
  name: "junghan",
  age: 32,
};

export {};
