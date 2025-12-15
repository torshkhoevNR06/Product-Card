import { Drink } from "./drink.js";
export class Lemonade extends Drink {
  constructor(name, size, price, syrup, sugar, acid, flavorings) {
    super(name, size, price);
    this.syrup = syrup;
    this.sugar = sugar;
    this.acid = acid;
    this.flavorings = flavorings
  };

  prepareDrink() {
    return `Добавляется ${this.syrup}, смешивается с ${this.sugar}, потом добавляется ${this.acid}, в конец используется ${this.flavorings}, оставляется 5 мин в холодильнике.`;
  };
}