import Plant from "./_plant.js";

export class Bush extends Plant {
  constructor(view, height, age) {
    console.group(`${view} info:`);
    console.log(super(view, height, age));
    console.groupEnd();
  }
}