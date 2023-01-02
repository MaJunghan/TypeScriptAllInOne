// type으로 진행하는 extends
type Animal = { breath: true };
type Poyouryu = Animal & { breed: true };
type Human = Poyouryu & { think: true };

const zerocho: Human = {
  breath: true,
  breed: true,
  think: true,
};

// interface extends
interface IAnimal {
  breath: true;
}
interface IPoyouryu extends IAnimal {
  breed: true;
}
interface IHuman extends IPoyouryu {
  think: true;
}

const junghan: IHuman = {
  breath: true,
  breed: true,
  think: true,
};
