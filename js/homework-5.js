// №01 Температура в городе
const getTemperatureInfo = (city, temperature) => {
	return `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`;
}

console.log(getTemperatureInfo('Назрани', 23.3));

// №02 Сравнение звуковой скорости с обычной
const SPEED_SOUND = 343;

const getResultComparisonsSpeed = speed =>
	speed > SPEED_SOUND ? 'Сверхзвуковая скорость' : 'Дозвуковая скорость';

console.log(getResultComparisonsSpeed(350));

// №03 Покупка продукта, расчет стоимости бюджета и стоимости товара
const productName = "Арбуз";
const productPrice = 30;

const purchaseProduct = budget => 
	budget >= productPrice 
		? `${productName} приобретен. Спасибо за покупку!` 
		: `Вам не хватает ${productPrice - budget}$, пополните баланс`;

console.log(purchaseProduct(15));

// Проверка аналитических способностей

// №04 Приветствие, исходя из текущего времени
const getGreetingTime = currentTime => {
	if (currentTime >= 6 && currentTime <= 11) {
		return `Доброе утро!`;
	
	} else if (currentTime >= 12 && currentTime <= 17) {
		return `Добрый день!`;
	
	} else {
		return `Добрый вечер!`;
	}
}

console.log(getGreetingTime(12));

// №05 Информация о пользователе
const userName = "Федор";
const userAge = 25;
const userHeight = 189;