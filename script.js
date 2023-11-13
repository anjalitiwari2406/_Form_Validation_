const form = document.getElementById('validationForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumber');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const firstNameFeedback = document.getElementById('firstNameFeedback');
const lastNameFeedback = document.getElementById('lastNameFeedback');
const emailFeedback = document.getElementById('emailFeedback');
const phoneNumberFeedback = document.getElementById('phoneNumberFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');
const confirmPasswordFeedback = document.getElementById('confirmPasswordFeedback');



form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate first name
  if (firstNameInput.value.length < 5) {
    firstNameFeedback.classList.add('d-block');
  } else {
    firstNameFeedback.classList.remove('d-block');
  }

  // Validate last name
  if (!lastNameInput.value) {
    lastNameFeedback.classList.add('d-block');
  } else {
    lastNameFeedback.classList.remove('d-block');
  }

  // Validate email
  const emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    emailFeedback.classList.add('d-block');
  } else {
    emailFeedback.classList.remove('d-block');
  }

  // Validate phone number
  const phoneNumberRegex = /^[0-9]{10}$/;
  if (!phoneNumberRegex.test(phoneNumberInput.value) || phoneNumberInput.value === '123456789') {
    phoneNumberFeedback.classList.add('d-block');
  } else {
    phoneNumberFeedback.classList.remove('d-block');
  }

  // Validate password
  if (passwordInput.value.length < 8 || passwordInput.value === 'password' || passwordInput.value === firstNameInput.value) {
    passwordFeedback.classList.add('d-block');
  } else {
    passwordFeedback.classList.remove('d-block');
  }

  // Validate confirm password
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordFeedback.classList.add('d-block');
  } else {
    confirmPasswordFeedback.classList.remove('d-block');
  }
});

