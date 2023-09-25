// what is typescript ?
// superset of js, strongly type programming language build on js
// type syntax

interface Obj {
  height: number;
  weight: number;
  gender?: boolean; //optional property
}

type FuncType = (n: number, m: number) => void; // function type which is not returning anything

interface NewObj extends Obj {
  scolar: boolean;
  func: FuncType;
}

var rahul: NewObj = {
  height: 3434,
  weight: 3434,
  scolar: true,
  func: (n, m) => {
    console.log(n * m);
  },
};

var tanya : NewObj = {
  height: 43434,
  scolar: true,
  weight: 545,
  func: (n, m) => {
    console.log(n * m);
  },
};

rahul.func(20, 10);

const obj: Obj = {
  gender: true,
  height: 3434,
  weight: 34,
};

const obj2: Obj = {
  gender: false,
  height: 4434,
  weight: 94,
};

const obj3: Obj = {
  height: 4434,
  weight: 94,
};
