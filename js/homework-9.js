// №01 Обработка отправки формы электронной почты
const emailFormSendingMail = document.getElementById("email-form__sending-mail");
emailFormSendingMail.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  console.log(data);
});

// №02 Обработка и отправка формы регистраций | Проверка валидации
let resultForm = {};
const password = document.getElementById("user-password");
const repeatedPassword = document.getElementById("user-repeated-password");

const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data.createdOn = new Date();
  
  console.log(data);
  resultForm = data;
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
  
const functionFormModal = () => {
  authenticationOpenModalBtn.addEventListener('click', () => {
  modalWindow.style = "display: flex";
  });

  loginBth.addEventListener("click", event => {
    event.preventDefault();
    const userLogin = document.querySelector('.user-login-2');
    const userPassword = document.querySelector('.user-password-2');
    const userLoginInput = userLogin.value;
    const userPasswordInput = userPassword.value;
    if (userLoginInput === resultForm["user-login"] && userPasswordInput === resultForm["user-password"]) {
      alert("🎉Вы успешно авторизовались!🎊");
      modalWindow.style = "display: none";
      console.log(currentUser.lastLogin = new Date());
    } else {
      alert("❌Проверь правильный ли логин и/или пароль, повторите попытку!");
    }
  });

  closeBtn.addEventListener("click", event => {
    event.preventDefault();
    modalWindow.style = "display: none";
  });
}

functionFormModal();

// №04 Информация о последнем входе пользователя после авторизаций
const currentUser = resultForm;
