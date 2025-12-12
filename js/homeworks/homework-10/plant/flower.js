import { Plant } from "./plant.js";

export class Flower extends Plant {
	constructor(view, height, age) {
		console.group(`${view} info:`);
		console.log(super(view, height, age));
		console.groupEnd();
	}
}