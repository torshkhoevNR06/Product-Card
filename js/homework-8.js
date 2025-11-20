// №01-02 Массив с объектами из 5 карточек и импорт в рабочий файл
import { productCards } from "./product-cards.js";

console.log(productCards);

// №03 Получаем шаблон и контейнер продуктовых карточек, затем клонируем шаблон и заполняем его данными из productCards
// ...

// №04 Получить строку состоящих из "названия карточек" с ";" между названиями
const arrayOfStringNames = productCards.reduce((result, card) => {
  result.push(card.title);
  return result;
}, []);

console.log(arrayOfStringNames.join("; "));

// №05 Получить массив состоящий из объектов с "названием продукта и его описанием"
const productDescriptionsByTitle  = productCards.reduce((result, card) => {
  result.push({[card.title]: card.paragraph});
  return result;
}, []);

console.log(productDescriptionsByTitle);

// 6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if).
const getQuantityCardsByUserInput = () => {
  const userInputResult = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(userInputResult);
  const displayProductCards = productCards.slice(0, count);

  if (count >= 1 && count <= 5) {
    const templateProductCards = document.getElementById('template-product-cards');
    const containerProductCards = document.querySelector(".container__product-cards");
    
    displayProductCards.forEach((card) => {
      const cardClone = templateProductCards.content.cloneNode(true);
      cardClone.querySelector('.product-cards__image').src = card.image;
      cardClone.querySelector('.product-cards__description-title').textContent = card.title;
      cardClone.querySelector('.product-cards__description-paragraph').textContent = card.paragraph;
      cardClone.querySelector('.product-cards__description-compound').textContent = card.compound;
      cardClone.querySelector('.description-list__item-1').textContent = card.listItem1;  
      cardClone.querySelector('.description-list__item-2').textContent = card.listItem2;  
      cardClone.querySelector('.description-list__item-3').textContent = card.listItem3;  
      cardClone.querySelector('.description-price__text').textContent = card.priceText;
      cardClone.querySelector('.description-price__tag').innerHTML = card.priceTag;
      containerProductCards.appendChild(cardClone);
    }); 
  }
  return displayProductCards;
};

getQuantityCardsByUserInput();