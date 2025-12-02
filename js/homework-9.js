// №01 Обработка отправки формы электронной почты
const getDataFromForm = (event, newDate) => {
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (newDate) {
    newDate = new Date();
    data.createdOn = newDate;
  }
  return data;
}
const emailForm = document.getElementById("email-form__sending-mail");
emailForm.addEventListener("submit", event => {
  event.preventDefault();
  console.log(getDataFromForm(event));
});

// №02 Обработка и отправка формы регистраций | Проверка валидации
let registeredUser = undefined;
const registrationForm = document.getElementById("registration-form");
const password = document.getElementById("user-password");
const repeatedPassword = document.getElementById("user-repeated-password");

const areValuesEqual = (firstValue, secondValue) => {
  return firstValue === secondValue;
}

const validatePasswords = () => {
  if (password.value !== "" && repeatedPassword.value !== "") {
    const arePasswordsMatch = areValuesEqual(password.value, repeatedPassword.value);
      if (!arePasswordsMatch) {
        alert('❌Пароли не совпадают.');
      }
    }
  }
password.addEventListener('change', validatePasswords);
repeatedPassword.addEventListener('change', validatePasswords);

registrationForm.addEventListener("submit", event => {
  event.preventDefault();
  console.log(getDataFromForm(event, true));
  registeredUser = getDataFromForm(event, true);
});

// №03 Реализация модального окна 
// // №04 Информация о последнем входе пользователя после авторизаций
let currentUser = undefined;
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
    const onLoginAndPasswordMatch = areValuesEqual(userLogin.value, userPassword.value);
    if (onLoginAndPasswordMatch) {
      alert("🎉Вы успешно авторизовались!🎊");
      modalWindow.classList.remove('open-modal');
      modalWindow.classList.add('close-modal');
      currentUser = registeredUser;
      console.log(`Время последней авторизаций: ${currentUser.lastLogin = new Date()}`);
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