// 出力結果を実際にindex.htmlのどこかにレンダリングしたい
import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  // まずはConstructor。型はHTMLUllistElement、つまりul要素であるということを指定。
  constructor(private container: HTMLUListElement){}

  // レンダリング部分
  // itemにはHasFormatterを実装して、あとは適宜指定。
  render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
    // li要素を新たに作成。
    const li = document.createElement('li');
    //同様にh4要素を新たに作成。
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    // li要素の末尾に上記のh4要素を追加(li配下にh4タグでマークアップするのと同じ)
    li.append(h4);
    // p要素作成
    const p = document.createElement('p');
    // itemはHasFormatter実装済みなのでメソッドが使える。
    p.innerText = item.format();
    // li要素の末尾に上記のp要素を追加(つまり、h4タグの下)
    li.append(p);
    // あとは受け取ったpos引数の値によってcontainerの前か末尾かに配置
    if(pos === 'start'){
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}