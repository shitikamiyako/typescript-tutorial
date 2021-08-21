"use strict";
// TSでDOMから要素を取得する際はquerySelectorで指定した要素が存在するかのチェックを行う。
// またその要素がhtmlファイル中に必ずあることがわかっているならば、querySelectorに!マークをつける
var anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);
// ダメな例
// const anchor = document.querySelector('a');
// console.log(anchor.href);
// const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//# sourceMappingURL=app.js.map