// №01 Обработка отправки формы электронной почты
const emailForm = document.getElementById("email-form__sending-mail");
const getDataFromForm = (event, newDate) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (newDate) {
    newDate = new Date();
    data.createdOn = newDate;
  }
  return data;
}

emailForm.addEventListener("submit", event => {
  console.log(getDataFromForm(event));
});

// №02 Обработка и отправка формы регистраций | Проверка валидации
let registeredUser = {};
const password = document.getElementById("user-password");
const repeatedPassword = document.getElementById("user-repeated-password");

const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", event => {
  console.log(getDataFromForm(event, true));
  registeredUser = getDataFromForm(event, true);
});

repeatedPassword.addEventListener("change", () => {
  const argumentResult = password.value !== repeatedPassword.value ? 'Пароли не совпадают.' : '';
  repeatedPassword.setCustomValidity(argumentResult);
});

// №03 Реализация модального окна
const modalWindow = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const authenticationOpenModalBtn = document.getElementById("authentication-open-modal-btn");
const loginBth = document.getElementById("login-btn");
  
const manageAuthorizationWindow = () => {
  authenticationOpenModalBtn.addEventListener("click", () => {
    modalWindow.classList.remove('close-modal');
    modalWindow.classList.add('open-modal');
  });

  loginBth.addEventListener("click", event => {
    event.preventDefault();
    const userLogin = document.querySelector('.user-login-2');
    const userPassword = document.querySelector('.user-password-2');
    const userLoginInput = userLogin.value;
    const userPasswordInput = userPassword.value;
    if (userLoginInput === registeredUser.userLogin && userPasswordInput === registeredUser.userPassword) {
      alert("🎉Вы успешно авторизовались!🎊");
      modalWindow.classList.remove('open-modal');
      modalWindow.classList.add('close-modal');
      console.log(currentUser.lastLogin = new Date());
    } else {
      alert("❌Проверь правильный ли логин и/или пароль, повторите попытку!");
    }
    });

  closeBtn.addEventListener("click", event => {
    event.preventDefault();
    modalWindow.classList.remove('open-modal');
    modalWindow.classList.add('close-modal');
  });
}

manageAuthorizationWindow();

// №04 Информация о последнем входе пользователя после авторизаций
const currentUser = registeredUser;