import { Drink } from "./drink.js";

export class Tea extends Drink {
  constructor(name, size, price, water, spoons, boilingPoint) {
    super(name, size, price);
    this.water = water;
    this.spoons = spoons;
    this.boilingPoint = boilingPoint;
  };

  getPrepareDrink() {
    return `Ополоснуть заварочную емкость - ${this.water} для прогрева, насыпать порцию - ${this.spoons}, залить - ${this.water} правильной температурой кипения - ${this.boilingPoint}`;
  };
}