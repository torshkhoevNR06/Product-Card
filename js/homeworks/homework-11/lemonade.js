import { Drink } from "./drink.js";
export class Lemonade extends Drink {
  #temperature;
  constructor(name, size, price, syrup, sugar, acid, flavorings) {
    super(name, size, price);
    this.syrup = syrup;
    this.sugar = sugar;
    this.acid = acid;
    this.flavorings = flavorings
  };

  #prepareDrink() {
    console.log(`Напиток готовиться: Добавляется ${this.syrup}, смешивается с ${this.sugar}, потом добавляется ${this.acid}, в конец используется ${this.flavorings}, оставляется 5 мин в холодильнике. Получаем напиток "${this.name}" с температурой ${this.#setTemperature(22.3)}`);
  };
  
  #setTemperature(temperature) {
    return this.#temperature = temperature;
  };

  getDrink() {
    return this.#prepareDrink();
  };

  getTemperature() {
    return this.#temperature;
  };
}