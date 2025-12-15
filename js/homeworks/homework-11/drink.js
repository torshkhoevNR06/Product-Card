export class Drink {
  #temperature;
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = undefined
  };

  getInfo() {
    return `Напиток: ${this.name}, ${this.size}, ${this.price}, ${this.getTemperature()}`;
  };
  
  getTemperature() {
    return this.#temperature;
  };
  
  #setTemperature(temperature) {
    this.#temperature = `Температура: ${temperature}`;
  };

  #prepareDrink(message) {
    console.log('Напиток готовиться:');
    console.log(message);
    this.#setTemperature(12.4);
  };

  presentDrink(message) {
    this.#prepareDrink(message);
    this.getTemperature();
    console.log(`Напиток "${this.name}" подан`);
  };
}