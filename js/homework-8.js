// №01-02 Массив с объектами из 5 карточек и импорт в рабочий файл
import { productCards } from "./product-cards.js";

console.log(productCards);

// №03 Получаем шаблон и контейнер продуктовых карточек, затем клонируем шаблон и заполняем его данными из productCards
// ...

// №04 Получить строку состоящих из "названия карточек" с ";" между названиями
const productCardNames = productCards.reduce((result, card) => {
  result.push(card.name);
  return result;
}, []);

console.log(productCardNames.join("; "));

// №05 Получить массив состоящий из объектов с "названием продукта и его описанием"
const productsDescriptionsByTitle  = productCards.reduce((result, card) => {
  result.push({[card.name]: card.description});
  return result;
}, []);

console.log(productsDescriptionsByTitle);

// №06 Функция, которая отображает кол-во карточек по запросу пользователя
const getQuantityCardsByUserInput = () => {
  const userInputResult = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(userInputResult);
  const displayProductCards = productCards.slice(0, count);

  if (count >= 1 && count <= 5) {
    const templateProductCards = document.getElementById('template-product-cards');
    const containerProductCards = document.querySelector(".container__product-cards");
    const imageBasePath = "image/";

    displayProductCards.forEach((card) => {
      const cardClone = templateProductCards.content.cloneNode(true);
      cardClone.querySelector('.product-cards__image').src = imageBasePath + card.image;
      cardClone.querySelector('.product-cards__description-item').textContent = card.skinType;
      cardClone.querySelector('.product-cards__description-title').textContent = card.name;
      cardClone.querySelector('.product-cards__description-paragraph').textContent = card.description;
      cardClone.querySelector('.product-cards__description-compound').textContent = "Состав:";

      const productCompoundList = cardClone.querySelector(".product-cards__description-list");
      card.compound.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        productCompoundList.appendChild(li);
      });
      cardClone.querySelector('.description-price__tag').innerHTML = `${card.price.toLocaleString()} &#x20BD`;
      containerProductCards.appendChild(cardClone);
    });
  }
};

getQuantityCardsByUserInput();