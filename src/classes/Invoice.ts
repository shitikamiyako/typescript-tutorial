import { HasFormatter } from '../interfaces/HasFormatter.js';

// このクラスでHasFormatterInterfaceを実装していますよということを示す
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){}
  // ここにHasFormatterのformat():stringを適用させたい
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}