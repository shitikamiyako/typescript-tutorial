import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

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

  // valuesに当たるプロパティはクラスの方で型を指定されてるのでそれに合わせてタプルにも定義をしておく
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    // クラスの引数自体は上でタプルとして定義してあるので...valuesとする
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');
});

// 普通のTuple
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

// 型定義したタプル
let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0]はstring型なので以下はエラー
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
// これも当然エラー
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];