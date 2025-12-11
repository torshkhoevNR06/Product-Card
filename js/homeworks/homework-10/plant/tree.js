import { Plant } from "./plant.js";

export class Tree extends Plant {
	constructor(view, height, age) {
		console.group(`${view} info:`);
		console.log(super(view, height, age));
		console.groupEnd();
	}

	showView(newView) {
		this.newView = newView;
		console.log(`Новый вид: ${this.newView}`);
	}
}