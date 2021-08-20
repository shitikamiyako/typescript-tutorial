"use strict";
// いちいちこんな風に型指定するのは面倒くさい。
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var logDetailsAgain = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
// 今度はこういう例。userオブジェクトの各プロパティに型指定をして引数にしたい。
var greet = function (user) {
    console.log(user.name + " says hello");
};
var greetAgain = function (user) {
    console.log(user.name + " says hello. His Uid is " + user.uid);
};
logDetails('test', 'testItem');
var Test = {
    name: 'Mike',
    uid: 14
};
greetAgain(Test);
//# sourceMappingURL=sandbox.js.map