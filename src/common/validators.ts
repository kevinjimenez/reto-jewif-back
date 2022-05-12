export class Validators {
  static isNumber(value: string): boolean {
    if (isNaN(+value)) {
      return false;
    } else {
      return true;
    }
  }
}
