const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let yourName = id("yourname"),
  Email = id("email"),
  Phone = id("phone");
errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

const form = document.querySelector('#form1');

// The start
const checkname = () => {

  let valid = false;

  const min = 2,
    max = 25;

  const name = yourName.value.trim();

  if (!isRequired(name)) {
    showError(yourName, 'Your name cannot be blank.');
  } else if (!isyourNameValid(name)) {
    showError(yourName, 'Your name contains only 26 uppercase or lowercase letters.')
  } else if (!isBetween(name.length, min, max)) {
    showError(yourName, `Your name must be between ${min} and ${max} characters.`)
  } else {
    showSuccess(yourName);
    valid = true;
  }
  return valid;
};

const checkemail = () => {

  let valid = false;

  const em = Email.value.trim();
  if (!isRequired(em)) {
    showError(Email, 'Email cannot be blank.');
  } else if (!validateEmail(em)) {
    showError(Email, 'Your email is invalid.')
  } else {
    showSuccess(Email);
    valid = true;
  }
  return valid;
};

const checkphone = () => {

  let valid = false;

  const ph = Phone.value.trim();
  if (!isRequired(ph)) {
    showError(Phone, 'Phone number cannot be blank.');
  } else if (!isyourPhoneValid(ph)) {
    showError(Phone, 'Your phone number is invalid.')
  } else {
    showSuccess(Phone);
    valid = true;
  }
  return valid;
};

const isyourNameValid = (yourName) => {
  const re = /^[a-z]+$/i;
  return re.test(yourName);
};

const isyourPhoneValid = (Phone) => {
  const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(Phone);
}

const validateEmail = (Email) => {
  return String(Email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

form.addEventListener('submit', function (e) {
  // validate fields
  e.preventDefault();
  let isyourNameValid = checkname(),
    isEmailValid = checkemail(),
    isyourPhoneValid = checkphone();

  let isFormValid = isyourNameValid && isEmailValid && isyourPhoneValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    HTMLFormElement.prototype.submit.call(form);
  }
});


const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args)
    }, delay);
  };
};

form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
    case 'yourname':
      checkname();
      break;

    case 'email':
      checkemail();
      break;

    case 'phone':
      checkphone();
      break;
  }
}));

function myfunc0() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    //Burger animation
    burger.classList.toggle('toggle');
  });

}

