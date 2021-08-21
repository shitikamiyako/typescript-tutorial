// TSでDOMから要素を取得する際はquerySelectorで指定した要素が存在するかのチェックを行う。
// またその要素がhtmlファイル中に必ずあることがわかっているならば、querySelectorに!マークをつける
const anchor = document.querySelector('a')!;
if(anchor) {
  console.log(anchor.href);
}
console.log(anchor.href);

// ダメな例
// const anchor = document.querySelector('a');
// console.log(anchor.href);
　

// 特定のFormの要素を取得する例。まずは基本。
// const form = document.querySelector('form')!;
// ただし、上記では複数Formがあった場合にこまる。ではこれはどうか？ 答えはNO。何故ならこれはHTMLのクラスであり、要素ではないから。
// const form = document.querySelector('.new-item-form') !;
// 正しくはこれ。 クラスをキャストすることで要素を引っ張ってくる。この場合はnew-item-formクラスの<form>の要素を返すという意味になる。
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// あとは以下のように返ってきた要素から特定の要素を取得したりする。
console.log(form.children);


// inputの場合はこちら。各種inputのIDに対応させる。
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// こっちはFormのsubmitイベントで発火する関数。今回はconsole.log()で上記の要素を返すようにしている。
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
});