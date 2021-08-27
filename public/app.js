import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// enumは列挙型という仕組みで定数をひとまとめのセットとしておける機能。
// 例えば以下の例
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
;
const docOne = {
    uid: 1,
    // resourceType = 0となる
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docTwo = {
    uid: 10,
    // resourceType = 3となる
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'name of the wind' }
};
console.log(docOne);
console.log(docTwo);
// 値を指定することもできる
var marioType;
(function (marioType) {
    marioType[marioType["MARIO"] = 64] = "MARIO";
    marioType["LUIGI"] = "GC";
    marioType["YOSSI"] = "SFC";
    marioType[marioType["PEACH"] = 0] = "PEACH";
})(marioType || (marioType = {}));
;
const data1 = {
    uid: 1,
    marioType: marioType.MARIO,
    data: { title: 'It`s me, Mario!' }
};
const data2 = {
    uid: 2,
    marioType: marioType.LUIGI,
    data: { Voice: 'AWAWAWAWA' }
};
const data3 = {
    uid: 3,
    marioType: marioType.YOSSI,
    data: { Voice: 'YOSSI! Peron, PA!' }
};
const data4 = {
    uid: 4,
    marioType: marioType.PEACH,
    data: { title: 'Super Mario 64' }
};
console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);
//# sourceMappingURL=app.js.map