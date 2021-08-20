// let greet: Function;

// 関数は作成したら利用する際には当然ながら引数で示された型指定は厳守しないといけない。
let greet: (a: string, b: string) => void;

// 正しい例
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}
// ダメな例
// greet = (name: string, greeting: number) => {
//   console.log(`${name} says ${greeting}`);
// }

// 以下の例は引数を再定義した場合。これも再定義した引数でオリジナルと同じ型を指定しないとダメ
// しかし、関数の返り値に対する型指定は改めてやらなくていい、明示的にやるとif-elseなどのときにエラーになる(偽判定だった場合、一度voidを返してからelseへ移り、最終的にelseの実行結果を返す)。
let calc: (a: number, b: number, c: string) => number;
// 正しい例
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}
// ダメな例
// calc = (numOne: boolean, numTwo: string, action: number): number => {
//   if (action === 'add') {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// }

// 引数のオブジェクト名を変えるとき、プロパティも揃える必要がある。
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};


logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}

logDetails({name: 'John', age: 15});