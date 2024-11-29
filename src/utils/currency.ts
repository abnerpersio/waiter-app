export class CurrencyUtils {
  static format(value: number) {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
}
