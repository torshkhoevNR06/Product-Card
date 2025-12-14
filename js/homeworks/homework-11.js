import { Cafe } from "./homework-11/cafe.js";
import { Lemonade } from "./homework-11/lemonade.js";
import { Tea } from "./homework-11/tea.js";
import { Coffee } from "./homework-11/coffee.js";

const cafe = new Cafe("Кофейная Гавань", "ул. Солнечная, д. 12, г. Берлин");
const cocaCola = new Lemonade(
	"Кока-Кола",
	18,
	"8$",
	"очищенная вода",
	"сахаром",
	"обычная кислота",
	"сладкий ароматизатор"
);
const greenTea = new Tea(
	"Зелёный чай",
	5.7,
	"10$",
	"горячей водой",
	"3 ложек",
	80
);
const coffee = new Coffee(
	"Американо",
	18,
	"12$",
	"среднего",
	"густое молоко",
	"сахаром"
);

console.log(cafe.getInfoCafe());

cafe.orderDrink(cocaCola.getInfo());
cocaCola.getDrink();
console.log(cocaCola.presentDrink());
cocaCola.getTemperature();

cafe.orderDrink(greenTea.getInfo());
greenTea.getDrink();
console.log(greenTea.presentDrink());

cafe.orderDrink(coffee.getInfo());
coffee.getDrink();
console.log(coffee.presentDrink());