// クラスがあるなら同然、publicとprivateもある。TypeScriptではそれに加えてreadonlyがある。
class Invoice {
  // readonlyアクセスはできるけども、クラスの外からは読み取りしかできず、そうなるとインスタンスで生成されたclientプロパティは当然クラスのそれとは別物なのでエラーになってしまう。
  // しかし、前回のように以下のような形式で書くのは面倒くさい……

  // readonly client: string;
  // private details: string;
  // public amount: number;

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = c;
  //   this.amount = c;
  // }

  // なので、修飾子を使う場合は以下のようにコンストラクタ内部で定義すると上記と同義になる。
  // こうすることでインスタンスから受け取った引数に対して自動的に修飾子と型定義が適用されるという仕組み。
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

// 以下実用例。Constructorにより、Invoice(client, details, amount);となる。
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);

// 試しにリストからオブジェクトにアクセスして値を取り出してみる。当然detailsはprivateなのでアクセスできない。
invoices.forEach(inv => {
  console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
})



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