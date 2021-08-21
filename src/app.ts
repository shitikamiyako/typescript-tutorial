// TypeScriptのクラスの話。
// 基本的には他の言語のClassと変わらない。

// まずはプロパティ。当然型定義もできる。
class Invoice {
  client: string;
  details: string;
  amount: number;

  // 次にConstructor、つまり初期化。これまでやってきたように引数に型定義もできる。
  constructor(c: string, d: string, a: number){
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  // メソッド
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

// 普通にインスタンス生成もできる。
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// インスタンス(オブジェクト)をリストにすることもできる
// その場合はそのクラスから生成されたインスタンス(オブジェクト)のリストという型定義をするので以下のようになる。
let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);
// invoices.push({ name: 'shaun' });

console.log(invOne);
console.log(invTwo);
console.log(invoices);

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