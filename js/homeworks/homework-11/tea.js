import { Drink } from "./drink.js";

export class Tea extends Drink {
  #temperature;
  constructor(name, size, price, water, spoons, boilingPoint) {
    super(name, size, price);
    this.water = water;
    this.spoons = spoons;
    this.boilingPoint = boilingPoint;
  };

  #prepareDrink() {
    console.log(`Заварка "${this.name}": Ополоснуть заварочную емкость ${this.water} для прогрева, насыпать порцию ${this.spoons}, залить ${this.water} правильной температурой "${this.#setTemperature(this.boilingPoint)}"`);
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