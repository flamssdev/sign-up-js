const button = document.querySelector(".submit");
const form = document.querySelector(".signup__form");

const regExpEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const regExpPassword =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!])[0-9a-zA-Z$*&@!#]{8,}$/;

let firstNameCheck = false;
let lastNameCheck = false;
let emailCheck = false;
let passwordCheck = false;

const dados = {
    dadosFirstName: "",
    dadosLastName: "",
    dadosEmail: "",
    dadosPassword: ""
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
});


form.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    button.click();
  }
});

window.onload = () => {
  document.querySelector(".js-first-name").value = "";
  document.querySelector(".js-last-name").value = "";
  document.querySelector(".js-email").value = "";
  document.querySelector(".js-password").value = "";
};

button.addEventListener("click", validateInput);

function validateInput() {
  //check first name
  const firstName = document.querySelector(".js-first-name");
  if (firstName.value === "") {
    document.querySelector(".js-icon-error-first-name").style.display = "block";
    document.querySelector(".first-name-error-text").style.display = "block";
    firstName.placeholder = "";
  } else {
    document.querySelector(".js-icon-error-first-name").style.display = "none";
    document.querySelector(".first-name-error-text").style.display = "none";
    dados.dadosFirstName = firstName.value;
    firstNameCheck = true;
  }

  //check last name
  const lastName = document.querySelector(".js-last-name");
  if (lastName.value === "") {
    document.querySelector(".js-icon-error-last-name").style.display = "block";
    document.querySelector(".last-name-error-text").style.display = "block";
    lastName.placeholder = "";
  } else {
    document.querySelector(".js-icon-error-last-name").style.display = "none";
    document.querySelector(".last-name-error-text").style.display = "none";
    dados.dadosLastName = lastName.value;
    lastNameCheck = true;
  }

  //check email
  const email = document.querySelector(".js-email");
  let isValidEmail = false;

  if (email.value.match(regExpEmail)) {
    isValidEmail = true;
  }

  if (email.value === "") {
    document.querySelector(".js-icon-error-email").style.display = "block";
    document.querySelector(".email-error-text").style.display = "block";
    email.placeholder = "email@example/com";
  } else if (isValidEmail == false) {
    document.querySelector(".js-icon-error-email").style.display = "block";
    document.querySelector(".email-error-text").style.display = "none";
    document.querySelector(".email-nao-valido").style.display = "block";
  } else {
    document.querySelector(".js-icon-error-email").style.display = "none";
    document.querySelector(".email-error-text").style.display = "none";
    document.querySelector(".email-nao-valido").style.display = "none";
    dados.dadosEmail = email.value;
    emailCheck = true;
  }

  //check password
  const password = document.querySelector(".js-password");
  let isValidPassword = false;

  if (password.value.match(regExpPassword)) {
    isValidPassword = true;
  }

  if (isValidPassword == false) {
    document.querySelector(".js-icon-error-password").style.display = "block";
    document.querySelector(".password-characters-text").style.display = "block";
    password.placeholder = "";
  } else {
    document.querySelector(".js-icon-error-password").style.display = "none";
    document.querySelector(".password-characters-text").style.display = "none";
    dados.dadosPassword = password.value;
    passwordCheck = true;
  }

  checkInput();
}

function checkInput() {
  // cadastro concluido
  if (
    firstNameCheck == true &&
    lastNameCheck == true &&
    emailCheck == true &&
    passwordCheck == true
  ) {
    document.querySelector(".right").style.display = "none";
    document.querySelector(".congratulation").style.display = "flex";
  }
}
