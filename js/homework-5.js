// №01 Температура в городе
const formatTemperatureInfo = (city, temperature) => {
	return `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`
}

console.log(formatTemperatureInfo('Назрани', 23.3));

// №02 Сравнение звуковой скорости с обычной
const speedSound = 343;

const checkSpeedType = (speed) => {
  return speed > speedSound ? 'Сверхзвуковая скорость' : 'Дозвуковая скорость';
}

console.log(checkSpeedType(350));

// №03 Покупка продукта, расчет стоимости бюджета и стоимости товара
const productName = "Арбуз";
const productPrice = 30;

const purchaseProduct = budget => {
	return budget >= productPrice ? `${productName} приобретен. Спасибо за покупку!` : `Вам не хватает ${productPrice - budget}$, пополните баланс`;
}

console.log(purchaseProduct(15));