import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// // ここでまず変数がHasFormatterInterfaceを実装していることを示す
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// // 次にインスタンスを作成する。InVoice,Paymentクラス双方ともHasFormatterを実装しているので型条件クリア。
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing', 200);

// // 上記2つのインスタンスはHasFormatter実装なので、リスト化する際もちゃんと指定する。
// // ここまでがInterfaceのモジュール化とそれを利用したクラスへのInterfaceの実装と利用の基本的な考え方
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// 以下実際の利用例
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  // 先程と同じく変数にInterface実装
  let doc: HasFormatter;
  // 値チェックに応じてインスタンスを返す
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  // 最終的に返ってきたインスタンスを出力
  console.log(doc);
});