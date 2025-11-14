import { socialMediaComments } from "./comments.js";

// №01 Отфильтровать числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(number => number >= 5);
console.log(filteredNumbers);

// №02 Проверка определенной сущности
const filmsAndBooks = ["Код да Винчи", "Утраченный символ", "После", "Дневник Бриджит Джонс", "Война и мир", "Прибытие"];

console.log(filmsAndBooks.includes("Война и мир"));

// №03 Перевернуть порядок элементов в массивах
const getReverseArray = array => {
  return array.reverse();
}

console.log(getReverseArray(numbers));
console.log(getReverseArray(filmsAndBooks));

// №04-05 Добавить файл comments.js, сделать массив экспортируемой 
console.log(socialMediaComments);

// №05 Вывод массив которые проходят условия с почтой
const filteredEmail = socialMediaComments.filter(comment => comment.email.includes('.com'));

console.log(filteredEmail);

// №06 Перебор массивов по условию индекса
const commentsWithUpdatedPostId = socialMediaComments.map(comment => ({...comment, postId: comment.id <= 5 ? 2 : 1}));

console.log(commentsWithUpdatedPostId);

// №07 Объекты из (id and name)
const simplifiedComments = socialMediaComments.map(comment => { return{ id: comment.id, name: comment.name }});

console.log(simplifiedComments);

// №08 Добавляем новое свойства isInvalid к объектам по условию
const commentsWithValidation = socialMediaComments.map(comment => ({...comment, isInvalid: comment.body.length > 180}));

console.log({commentsWithValidation});

// №09 Вывод массив почт через (reduce and map)
const emailsViaReduce = socialMediaComments.reduce((result, comment) => {
  result.push(comment.email);
  return result;
}, []);

const emailsViaMap = socialMediaComments.map(comment => comment.email);

console.log(emailsViaReduce);
console.log(emailsViaMap);

// №10 Преобразование массива в строку
console.log(emailsViaReduce.toString());
console.log(emailsViaMap.join(", "));