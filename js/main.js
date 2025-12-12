// №02 Импортирование файлов в main.js
import "./homeworks/homework-4.js";
import "./homeworks/homework-5.js";
import "./homeworks/homework-6.js";
import "./homeworks/homework-7.js";
import "./homeworks/homework-8.js";
import "./homeworks/homework-9.js";
import "./homeworks/homework-10/modal.js";
import "./homeworks/homework-10/form.js";
import { Tree } from "./homeworks/homework-10/plant/tree.js";
import { Flower } from "./homeworks/homework-10/plant/flower.js";
import { Bush } from "./homeworks/homework-10/plant/bush.js";
import { Grass } from "./homeworks/homework-10/plant/grass.js";
import { Modal } from "./homeworks/homework-10/modal.js";
import { Form } from "./homeworks/homework-10/form.js";

// №03 Структура классов с наследованием "Растения"
const tree = new Tree("Tree", 11, 70);
tree.showInfo("Tree", 11, 70);
console.log(tree.age, tree.view, tree.height);
tree.showView('Olive');

const flower = new Flower("Flower", 41, 70);
flower.showInfo("Flower", 11, 70);
flower.setHeight(100);
console.log(flower.age, flower.view, flower.height);

const bush = new Bush("Bush", 23, 70);
bush.showInfo("Bush", 11, 70);
bush.setHeight(40);
console.log(bush.age, bush.view, bush.height);
console.log(bush.getColor('тёмно-зеленый'));

const grass = new Grass("Grass", 445, 70);
grass.showInfo("Grass", 11, 70);
grass.setHeight(45);
console.log(grass.age, grass.view, grass.height);

// №04 Переписать модальное окно
const modalWindow = new Modal('modal');
const loginBth = document.getElementById("login-btn");
const authenticationOpenModalBtn = document.getElementById("authentication-open-modal-btn");
const closeBtn = document.querySelector(".close-btn");

let currentUser = undefined;
const userLogin = document.querySelector('.user-login-2');
const userPassword = document.querySelector('.user-password-2');

authenticationOpenModalBtn.addEventListener('click', event => {
  event.preventDefault();
  modalWindow.openModal();
});

closeBtn.addEventListener('click', event => {
  event.preventDefault();
  modalWindow.closeModal();
});

loginBth.addEventListener('click', event => {
  event.preventDefault();
  const isPasswordsEqual = registrationForm.isEqualValues(registeredUser.userPassword, userPassword.value);
  const isLoginsEqual = registrationForm.isEqualValues(registeredUser.userLogin, userLogin.value);
  
  if (isPasswordsEqual && isLoginsEqual) {
    alert("🎉Вы успешно авторизовались!🎊");
    modalWindow.closeModal();
    currentUser = registeredUser;
    console.log(`Время последней авторизаций: ${currentUser.lastLogin = new Date()}`);
  } else {
    alert("❌Проверь правильный ли логин и/или пароль, повторите попытку!");
  }
});

// №05 Переписать форму регистраций
const registrationForm = new Form('registration-form');
const password = document.getElementById("user-password");
const repeatedPassword = document.getElementById("user-repeated-password");
let registeredUser = undefined;

registrationForm.form.addEventListener('submit', event => {
  event.preventDefault();
  const arePasswordsMatch = registrationForm.isEqualValues(password.value, repeatedPassword.value);
  
  if (!arePasswordsMatch) {
    alert('❌Пароли не совпадают.');
  } else {
    const data = registrationForm.getData(event);
    console.log(data);
    registrationForm.resetForm();
    data.createdOn = new Date();
    registeredUser = data;
  }
});

// №06 Проработка контекста функций, некоторые примеры
const user = {
  name: 'Nakir',
  age: 20,
  height: 175,
  wight: 82,
  
  showInfoUser: function() {
    setTimeout(() => {
      console.log(this.name, this.age, this.height, this.wight);
    }, 1000);
  }
}
user.showInfoUser();

const phones = function() {
  console.log(this.phone);
}

const me = { phone: 'Redmi 12', phones };
const father = { phone: 'iPhone 8', phones };
const mother = { phone: 'iPhone 15', phones };

me.phones();
father.phones();
mother.phones();

const robot = {
    model: 'T-1000',
    status: 'Operational',
    logStatus: function() {
        console.log(`Model: ${this.model}, Status: ${this.status}`);
    }
};

const executor = robot.logStatus;
executor.bind(robot)();