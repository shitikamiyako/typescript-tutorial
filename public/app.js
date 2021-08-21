"use strict";
// TypeScriptのクラスの話。
// 基本的には他の言語のClassと変わらない。
// まずはプロパティ。当然型定義もできる。
var Invoice = /** @class */ (function () {
    // 次にConstructor、つまり初期化。これまでやってきたように引数に型定義もできる。
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // メソッド
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(invOne);
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
//# sourceMappingURL=app.js.map