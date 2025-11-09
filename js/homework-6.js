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
const infoAuto = {
	brand: 'Toyota',
	model: 'Camry',
	yearRelease: 2018,
	color: 'Металлический серый',
	viewBox: 'Автоматическая (6-ступенчатая)'
};

infoAuto.ownerAuto = infoAboutMe;
console.log(infoAuto);

// №03 Проверка на наличий свойства "максимальная скорость"
const checkPropertyMaxSpeed = infoAuto => {
	return infoAuto.maxSpeed ? true : infoAuto.maxSpeed = 189;
};

checkPropertyMaxSpeed(infoAuto); // Поменять названия функций

// №04 Вывод значения из объекта
const getObjectKey = (object, key) => {
	return object[key];
};

console.log(getObjectKey(infoAboutMe, 'name'));

// №05 Корзина с продуктами из Пятёрочки
const productBasket = {
	product1: "Мандарин",
	product2: "Авокадо",
	product3: "Персик",
	product4: "Лимон",
	product5: "Картофель",
	product6: "Макароны",
	product7: "Творог",
	product8: "Сгущёнка"
}

console.log(productBasket);

// №06 Несколько книг по саморазвитий и программированию и небольшая характеристика по ним
const booksProgrammingList = [
	atomicHabits = {
		name: 'Атомные привычки',
		after: 'Джеймс Клир',
		pages: 300,
		genre: 'Саморазвитие / Психология',
		coverType: 'Твёрдая (с глянцевым покрытием и иллюстрацией в минималистичном стиле)'
	},

	cleanCode = {
		name: 'Чистый код: создание, анализ и рефакторинг',
		after: 'Роберт Мартин',
		pages: 487,
		genre: 'Программирование / Лучшие практики и рефакторинг',
		coverType: 'Мягкая (с минималистичным дизайном в чёрно-белых тонах и кодовыми элементами)'
	}
];

booksProgrammingList.push(
	{
		name: 'Программист-прагматик: путь от подмастерья к мастеру',
		after: 'Эндрю Хант и Дэвид Томас',
		pages: 566,
		genre: 'Программирование / Общие принципы и карьерный рост',
		coverType: 'Твёрдая (с современным дизайном в синих тонах и иллюстрациями инструментов)',
	}
); 

console.log(booksProgrammingList);

// №07 Несколько книг из вселенной "Властелин Колец"
const booksLordOfTheRings = [
	hobbitOrThereAndBack = {
		title: 'Хоббит, или Туда и обратно',
		author: 'Дж. Р. Р. Толкин',
		year: 1937,
		genre: 'Фэнтези',
		pages: 310
	},

	brotherlyRings = {
		title: 'Властелин колец: Братство кольца',
		author: 'Дж. Р. Р. Толкин',
		year: 1954,
		genre: 'Фэнтези',
		pages: 423
	},

	twoFortresses = {
		title: 'Властелин колец: Две крепости',
		author: 'Дж. Р. Р. Толкин',
		year: 1954,
		genre: 'Фэнтези',
		pages: 352
	},
];

const listBooks = [...booksProgrammingList, ...booksLordOfTheRings];
console.log(listBooks);

// №08 Добавление нового свойства и ключа, проверка на кол-во страниц
checkQuantityPages = () => {
	listBooks.forEach(book => {
		console.log(book.pages < 350 ? 'Мало страниц' : 'Много страниц');
	});
}

checkQuantityPages();