"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
// このクラスでHasFormatterInterfaceを実装していますよということを示す
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // ここにHasFormatterのformat():stringを適用させたい
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
exports.Invoice = Invoice;
//# sourceMappingURL=Invoice.js.map