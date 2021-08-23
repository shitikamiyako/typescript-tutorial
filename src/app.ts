// Interfaceはオリジナルの型定義を行うためのもの。ただし、定義とはいうものの宣言的なものである。
// つまり、以下の例はIsPersonという型を自分で定義して作成するということを行っている。
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// 試しにこの型のオブジェクトを作ってみる。
const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  },
  // 定義とは別のプロパティを作ろうとするとエラーになる
  // skills: [],
};

console.log(me);
me.speak('hello, world');

// 今度はオブジェクトを引数にしてその値を利用した関数を作ってみる。
const greetPerson = (person: IsPerson): void => {
  console.log('hello ', person.name);
}

greetPerson(me);
// なお、型定義で引数はisPerson型と決まっているので以下はエラーとなる。
// greetPerson({name: 'shaun'});

// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();

//   console.log(
//     type.value,
//     tofrom.value,
//     details.value,
//     amount.valueAsNumber
//   );
// });