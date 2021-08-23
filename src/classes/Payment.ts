import { HasFormatter } from '../interfaces/HasFormatter.js';

// このクラスでHasFormatterInterfaceを実装していますよということを示す
export class Payment implements HasFormatter{
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ){};

  // ここにHasFormatterのformat():stringを適用させたい
  format() {
    return`${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}