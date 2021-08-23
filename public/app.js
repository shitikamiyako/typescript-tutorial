"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_js_1 = require("./classes/Invoice.js");
const Payment_js_1 = require("./classes/Payment.js");
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
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// 以下実際の利用例
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // 先程と同じく変数にInterface実装
    let doc;
    // 値チェックに応じてインスタンスを返す
    if (type.value === 'invoice') {
        doc = new Invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    最終的に返ってきたインスタンスをconsole.log;
    console.log(doc);
});
//# sourceMappingURL=app.js.map