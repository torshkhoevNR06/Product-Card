// №01 Информация обо мне
const infoAboutMe = {
	name: 'Накир',
	surname: 'Торшхоев',
	age: 20,
	weight: 75,
	height: 175,
	email: 'nakir3000@gmail.com',
	job: 'Упаковщик(в отпуске)',
	post: 'Старший склада',
	country: 'Россия',
	city: 'Назрань'
};

console.log(infoAboutMe);

// №02 Информация об автомобиле и его владельце
const autoInfo = {
	brand: 'Toyota',
	model: 'Camry',
	yearRelease: 2018,
	color: 'Металлический серый',
	transmission: 'Автоматическая (6-ступенчатая)'
};

autoInfo.owner = infoAboutMe;
console.log(autoInfo);

// №03 Проверка на наличий свойства "максимальная скорость"
const getPropertyMaxSpeed = object => {
	if (object.maxSpeed) {
		return true;
	} else {
		return object.maxSpeed = 189;
	}
};

getPropertyMaxSpeed(autoInfo);

// №04 Вывод значения из объекта
const getValue = (object, key) => {
	return object[key];
};

console.log(getValue(infoAboutMe, 'name'));

// №05 Корзина с продуктами из Пятёрочки
const productBasket = ["Мандарин", "Авокадо", "Персик", "Лимон", "Картофель", "Макароны", "Творог", "Сгущёнка"];

console.log(productBasket);

// №06 Несколько книг по саморазвитий и программированию и небольшая характеристика по ним
const booksProgramming = [
	{
		name: 'Атомные привычки',
		after: 'Джеймс Клир',
		pages: 300,
		genre: 'Саморазвитие / Психология',
		coverType: 'Твёрдая (с глянцевым покрытием и иллюстрацией в минималистичном стиле)'
	},
	{
		name: 'Чистый код: создание, анализ и рефакторинг',
		after: 'Роберт Мартин',
		pages: 487,
		genre: 'Программирование / Лучшие практики и рефакторинг',
		coverType: 'Мягкая (с минималистичным дизайном в чёрно-белых тонах и кодовыми элементами)'
	}
];
booksProgramming.push(
	{
		name: 'Программист-прагматик: путь от подмастерья к мастеру',
		after: 'Эндрю Хант и Дэвид Томас',
		pages: 566,
		genre: 'Программирование / Общие принципы и карьерный рост',
		coverType: 'Твёрдая (с современным дизайном в синих тонах и иллюстрациями инструментов)'
	}
); 

console.log(booksProgramming);

// №07 Несколько книг из вселенной "Властелин Колец"
const booksLordOfTheRings = [
	{
		title: 'Хоббит, или Туда и обратно',
		author: 'Дж. Р. Р. Толкин',
		year: 1937,
		genre: 'Фэнтези',
		pages: 310
	},
	{
		title: 'Властелин колец: Братство кольца',
		author: 'Дж. Р. Р. Толкин',
		year: 1954,
		genre: 'Фэнтези',
		pages: 423
	},
	{
		title: 'Властелин колец: Две крепости',
		author: 'Дж. Р. Р. Толкин',
		year: 1954,
		genre: 'Фэнтези',
		pages: 352
	},
];

const listBook = [...booksProgramming, ...booksLordOfTheRings];
console.log(listBook);

// №08 Добавление нового свойства и ключа, проверка на кол-во страниц
	listBook.forEach(book => {
		book.manyPages = book.pages < 350;
	});

console.log(listBook);