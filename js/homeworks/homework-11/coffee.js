import { Drink } from "./drink.js";
export class Coffee extends Drink {
  constructor(name, size, price, bean, milk, sugar) {
    super(name, size, price);
    this.bean = bean;
    this.milk = milk; 
    this.sugar = sugar;
  };

  getPreparationDrinkProcess() {
    return `Помол типа зерна - ${this.bean}, соблюдение пропорций кофе и воды, нагрев воды(94-96), настаивания 3-4 мин, добавления типа молока - ${this.milk} и с ${this.sugar}.`;
  };
}