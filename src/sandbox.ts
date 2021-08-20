// 関数に対する型指定は基本的には返り値で何を返すかで決まる
// 例えば関数に返り値がない場合はvoid型をつける。勿論引数に型をつけることも可能。
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10);

const testculc = (d: number, e:number, f: string = 'Good Luck'): void => {
  let result = d * e ;
  console.log('result'+ ' ' + f)
}

testculc(4,7);

const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10,7);
console.log(result);