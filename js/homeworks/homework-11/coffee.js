import { Drink } from "./drink.js";
export class Coffee extends Drink {
  #temperature;
  constructor(name, size, price, bean, milk, sugar) {
    super(name, size, price);
    this.bean = bean;
    this.milk = milk;
    this.sugar = sugar;
  };

  #prepareDrink() {
    console.log(`Приготовление кофее: Помол типа зерна - ${this.bean}, соблюдение пропорций кофе и воды, нагрев воды(94-96), настаивания 3-4 мин, добавления типа молока - ${this.milk} и с ${this.sugar}. Температура ${this.#setTemperature(15.5)}`);
  };
  
  #setTemperature(temperature) {
    return this.#temperature = temperature;
  };

  getDrink() {
    return this.#prepareDrink();
  }

  getTemperature() {
    return this.#temperature;
  };
}