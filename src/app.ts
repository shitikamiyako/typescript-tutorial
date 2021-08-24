import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// // list template instance
// const ul = document.querySelector('ul')!;
// const list = new ListTemplate(ul);

// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();

//   let doc: HasFormatter;
//   if (type.value === 'invoice') {
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
//   } else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
//   }

//   list.render(doc, type.value, 'end');
// });

// GENERICS

// オブジェクトを引数としてそのオブジェクトに新しくuidプロパティを加えて返す関数
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// let docOne = addUID({name: 'yoshi', age: 40});
// ここまでは無事に行く。
// console.log(docOne);
// しかしこれはエラー。なぜならaddUIDから返ってきた値は型が定義されていないから。本当は下記のように型が定義されていないと駄目だがそれがないため。
// let docOne: {
//     name: string;
//     age: number;
// } & {
//     uid: number;
// }
// console.log(docOne.name);

// // ではどうするのかというと関数の引数に<T extends object>というジェネリックスという機能を使う。
// // これは使われるまで型が決まらない場合、その値を引き受けておくための機能
// // この場合だと、引数はオブジェクトだよということで、そのオブジェクトのプロパティを引き受けておける。
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// // つまり、以下の場合でも先ほどと違いちゃんとnameとageプロパティとその値は保証されているので
// let docOne = addUID({name: 'yoshi', age: 40});
// // ジェネリックの型は引数から明示的に導き出せる場合は型推論してくれるので、これでdocOneオブジェクトのプロパティの値を出力できる
// console.log(docOne.name);

// 推論させずに確実にプロパティに指定した型を定義したい場合は以下のようにジェネリックに引き受けさせる時点で型定義を行っておく。
// これを行わないと let docOne = addUID({name: 40, age: 40}); これが通ってしまう。
// なので下記のようにnameプロパティはstringだよと指定しておく
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
//let docTwo = addUID('shaun');
console.log(docOne.name);
console.log(docOne.age);

// Interfaceと同時に使う
interface Resource<T> {
  uid: number;
  resourceName: string;
  // dataプロパティの値は決めてないので、ジェネリックを使ってTとしておく
  data: T;
}

// ResourceInterfaceを実装してオブジェクトを作る。Tにはオブジェクト型を指定。
const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'shaun' }
};

// 今度は文字列のリストを指定
const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: 'shoppingList',
  data: ['bread', 'milk']
};

console.log(docThree, docFour);