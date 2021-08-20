"use strict";
// 関数に対する型指定は基本的には返り値で何を返すかで決まる
// 例えば関数に返り値がない場合はvoid型をつける
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10);
var testculc = function (d, e, f) {
    if (f === void 0) { f = 'Good Luck'; }
    var result = d * e;
    console.log('result' + ' ' + f);
};
testculc(4, 7);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
//# sourceMappingURL=sandbox.js.map