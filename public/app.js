"use strict";
// クラスがあるなら同然、publicとprivateもある。TypeScriptではそれに加えてreadonlyがある。
var Invoice = /** @class */ (function () {
    // 前回までのようにこのタイミングでprivateを決めてしまうとインスタンスから当然detail、readonlyプロパティにはアクセスできない。
    // 正確にはreadonlyアクセスはできるけども、クラスの外からは読み取りしかできないので変更ができない
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // なので、修飾子を使う場合は以下のようにコンストラクタ内部で定義する。
    // こうすることでインスタンスから受け取った引数に対して自動的に修飾子と型定義が適用されるという仕組み。
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
// 以下実用例。Constructorにより、Invoice(client, details, amount);となる。
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// 試しにリストからオブジェクトにアクセスして値を取り出してみる。当然detailsはprivateなので
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
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