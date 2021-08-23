"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
// このクラスでHasFormatterInterfaceを実装していますよということを示す
class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    ;
    // ここにHasFormatterのformat():stringを適用させたい
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
exports.Payment = Payment;
//# sourceMappingURL=Payment.js.map