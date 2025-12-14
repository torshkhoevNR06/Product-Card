export class Drink {
  #temperature;
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = undefined;
  };

  getInfo() {
    return `Напиток: ${this.name}, ${this.size}, ${this.price}`;
  };

  getTemperature() {
    return this.#temperature;
  };

  #setTemperature(temperature) {
    return this.#temperature = temperature;
  };

  #prepareDrink() {
    return `Напиток готовиться...`;
  };

  presentDrink() {
    console.log("Напиток подан:"); 
    return {
      name: this.name,
      size: this.size,
      price: this.price,
      temperature: this.getTemperature()
    };
  };
}