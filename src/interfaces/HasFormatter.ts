// Interfaceをモジュール化しておき、クラスで継承できるようにする。
// これをimplementsするということは、そのクラスやインスタンスがformat():stringのメソッドを持っているということを表す

export interface HasFormatter {
  format(): string;
}