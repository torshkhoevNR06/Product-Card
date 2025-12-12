import { Plant } from "./plant.js";

export class Bush extends Plant {
	constructor(view, height, age) {
		console.group(`${view} info:`);
		console.log(super(view, height, age));
		console.groupEnd();
	}

	getColor(color) {
		this.color = color;
		return `Добавлен цвет для ${this.view}: ${color}`;
	}
}