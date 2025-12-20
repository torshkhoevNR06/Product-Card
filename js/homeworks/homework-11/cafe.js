export class Cafe {
  constructor(name, address) {
    this.name = name,
    this.address = address
  };

  showCafeInfo() {
    console.log(`Информация про кафе: Название кафе "${this.name}", его адрес "${this.address}"`);
  };

  orderDrink(drink) {
    console.log(`Заказ: "${drink.name}"`);
    drink.presentDrink(drink.getPreparationDrinkProcess());
  };
}