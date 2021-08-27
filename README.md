# enumを使うことへの懸念点と代案について

## 理由1

### TypeScript独自の機能のためJavascriptでは利用できないためコンパイル時に不都合が起きる。
[引用: TypeScriptのenumを使わないほうがいい理由を、Tree-shakingの観点で紹介します](https://engineering.linecorp.com/ja/blog/typescript-enum-tree-shaking/)

>JavaScriptの言語仕様に存在しないものを実現するために、TypeScriptコンパイラはIIFE（即時実行関数）を含んだコードを生成します。
>Rollupなどのバンドラーは、IIFEを「使っていないコード」と判断することができません。 MOBILE_OS をimportして、実際には使っていないとしても、最終的なバンドルに含まれてしまいます。（Tree-shakingができません）

## 理由2

### 理由1と合わせてJavascriptと互換性がないのはそもそもTypeScriptのコンセプトから外れるのではないかということ。
[引用: さようなら、TypeScript enum](https://www.kabuku.co.jp/developers/good-bye-typescript-enum)

>constでないenumはTypeScriptの”a typed superset of JavaScript”というコンセプトにそぐわない
>>このコンセプトは、TypeScriptが他のaltJSを差し置いて大きな支持を得た決定的な要因の1つと言えるでしょう。constでないenumは、JavaScriptと互換性のない構文で実行時に存在するJavaScriptオブジェクトを生成することで、このコンセプトに違反します。

## 理由3

### `const enum`に罠が一杯ある。

`const enum`は

```ts

enum Question {
    correct,
    wrong,
    unknown
}

let answer = Question.correct;

```

という定義をコンパイルする場合、`const enum`とすることでコンパイル時にインライン化することで

```ts

enum Question {
    correct,
    wrong,
    unknown
}

// Question.correct
let answer = 0;

```

とコンパイルされるようにする仕組み。
が、これには以下のような落とし穴がある。

- Babelでトランスパイルするには結局通常のenumに書き換えるか、プラグインを使ってそれを自動化するかしないといけない
- アンビエントコンテキストにおける以下の問題点
[引用: さようなら、TypeScript enum](https://www.kabuku.co.jp/developers/good-bye-typescript-enum)

>--isolatedModulesコンパイルオプションを有効にする場合、アンビエントコンテキスト（*.d.tsファイルの中やdeclare構文）で宣言されたconst enumに別モジュール（別ファイル）からアクセスするとコンパイルエラーになります。そのconst enumを内部的にしか利用せず、そのコードがコンパイルされる際のオプションを100%制御できるならいいですが、そうでないなら問題になります。(中略)TypeScriptチームのメンバーもこのことを踏まえ、“const enum on DT really does not make sense”（DTはDefinitelyTyped）であり、アンビエントコンテキストにおいては“You should use a union type of literals (string or number) instead.”であると述べています。

>--isolatedModulesは、コンパイルを1モジュール（1ファイル）ずつ行えるようにするためのオプションなので、const enumの出力結果が通常のenumのようになるのは想定の範囲内です。別モジュール（別ファイル）に存在するconst enumの定義元の情報が参照できない状況下では、const enumの本来の挙動であるインライン化は実現できません。

- number型において型安全ではない(それを求める場合はunion型を使う)

- コンパイル時にインライン化するということは逐一enumの中身が展開されてしまう点(長い文字列の場合コンパイルに負担がかかる)

## 対応策

### union型を使う

不透明性という特徴以外はほぼ代用できるらしい。
ちなみにunion型は

```ts

const formatCommandLine(command: string[]|string) => {
    let line = "";
    if(typeof command === "string" ) {
        line = command.trim();
    } else {
        line = command.join("").trim();
    }
}


```

といったようにプロパティの型に冗長性を持たせるもの(この場合だとstringのリストかstring型ということになる)。
これを使ってenumで書いていたことを以下のようにする。

```ts

// これを
enum marioType {
   MARIO = 64,
   LUIGI = 'GC',
   YOSSI = 'SFC',
   PEACH = 0,
};

// こうする
const marioType = {
   MARIO = 64,
   LUIGI = 'GC',
   YOSSI = 'SFC',
   PEACH = 0,
} as const;

type marioType = typeof marioType[keyof typeof marioType];

// するとコンパイルはこうなる
const marioType = {
   MARIO = 64,
   LUIGI = 'GC',
   YOSSI = 'SFC',
   PEACH = 0,
};



```