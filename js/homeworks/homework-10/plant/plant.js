export class Plant {
  constructor(view, height, age) {
    this.view = view;
    this.height = height;
    this.age = age;
  }

  showInfo() {
    console.log(`Вывод информаций: ${this.view}`, {
      view: this.view,
      height: this.height,
      age: this.age
    });
  }

  setHeight(height) {
    this.height = height;
  }
}