// いちいちこんな風に型指定するのは面倒くさい。
const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

// なので先に型のエイリアス(別名)を作る。
// これはこの型はstringかnumber型だよという意味
type StringOrNum = string | number;
const logDetailsAgain = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

// 今度はこういう例。userオブジェクトの各プロパティに型指定をして引数にしたい。
const greet = (user: {name: string, uid: string | number}) => {
  console.log(`${user.name} says hello`);
}

type ObjectWithName = {name: string, uid: StringOrNum};
const greetAgain = (user: ObjectWithName) => {
  console.log(`${user.name} says hello. His Uid is ${user.uid}`)
}

logDetails('test','testItem');
let Test = {
  name: 'Mike',
  uid: 14
};

greetAgain(Test);