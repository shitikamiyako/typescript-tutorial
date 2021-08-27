import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});

// enumは列挙型という仕組みで定数をひとまとめのセットとしておける機能。
// 例えば以下の例
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

// こうすると以下の通りになる

// {
//   BOOK = 0,
//   AUTHOR = 1,
//   FILM = 2,
//   DIRECTOR = 3
// }

// 実際に上記の例を利用してみたのが下記の例
interface Resource<T> {
  uid: number;
  // Interfaceのプロパティとして設定
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  // resourceType = 0となる
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
  uid: 10,
  // resourceType = 3となる
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);

// 値を指定することもできる

enum marioType {
  MARIO = 64,
  LUIGI = 'GC',
  YOSSI = 'SFC',
  PEACH = 0,
};

interface marioFamily<T> {
  uid: number,
  marioType: marioType,
  data: T,
}

const data1: marioFamily<object> = {
  uid: 1,
  marioType: marioType.MARIO,
  data: {title: 'It`s me, Mario!'}
}

const data2: marioFamily<object> = {
  uid: 2,
  marioType: marioType.LUIGI,
  data: {Voice: 'AWAWAWAWA'}
}

const data3: marioFamily<object> = {
  uid: 3,
  marioType: marioType.YOSSI,
  data: {Voice: 'YOSSI! Peron, PA!'}
}

const data4: marioFamily<object> = {
  uid: 4,
  marioType: marioType.PEACH,
  data: {title: 'Super Mario 64'}
}

console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);

// 以後は補足ファイルを参照
