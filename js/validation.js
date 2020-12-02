`use strict`;

(function () {
  window.validation = {
    main: function (email, password) {
      const formInputs = document.querySelectorAll(`.form__input`);

      const formBtn = document.querySelector(`.form__submit`);
      const passInput = document.querySelector(`.form__input--password`);
      const cPassInput = document.querySelector(`.form__input--c-password`);
      const cPassControl = document.querySelector(`.form__control--c-password`);
      const emailInput = document.querySelector(`.form__input--email`);

      const REGEX_PASSWORD = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/;
      const REGEX_EMAIL = /\S+@\S+\.\S+/;

      window.setTimeout(function () {
        formBtn.classList.remove(`error`);
        cPassControl.classList.remove(`error`);
      }, 400)
      
      // Окрашивает незаполненые поля
      for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value === ``) {
          formInputs[i].classList.add(`invalid`);
        } else {
          formInputs[i].classList.remove(`invalid`);
        }
      }

      // Отменяет отправку формы при незаполненом поле
      for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value === ``) {
          formBtn.classList.add(`error`);
          formInputs[i].focus();
          formInputs[i].setCustomValidity(`Required field`);
          formInputs[i].reportValidity();
          return false;
        }
        if (formInputs[i].value === ``) {
          break;
        }
      }

      // Валидация почты
      if (REGEX_EMAIL.test(email)) {
        emailInput.setCustomValidity(``);
        emailInput.classList.remove(`invalid-email`);

        // Проверка пароля
        if (REGEX_PASSWORD.test(password)) {
          passInput.setCustomValidity(``);
          passInput.classList.remove(`invalid`);
          if (passInput.value !== cPassInput.value) {
            cPassControl.classList.add(`error`);
            formBtn.classList.add(`error`);
            cPassInput.setCustomValidity(`Password not confirmed`);
            cPassInput.reportValidity();
            return false;
          }
        } else {
          passInput.classList.add(`invalid`);
          formBtn.classList.add(`error`);
          passInput.setCustomValidity(`
          At least 8 symbols, at least 1 uppercase letter and at least 1 number`);
          passInput.reportValidity();
          return false;
        }
        //
        
        return true;
      } else {
        formBtn.classList.add(`error`);
        emailInput.classList.add(`invalid-email`);
        emailInput.setCustomValidity(`Example: alice.miller@yahoo.com`);
      }
      emailInput.reportValidity();
    },

    maxValue: function (evt) {
      const MAX_VALUE = 40;

      if (evt.target.value.length > MAX_VALUE) {
        evt.target.classList.add(`invalid-email`);
        evt.target.setCustomValidity(`Please delete ` + (evt.target.value.length - MAX_VALUE) + ` extra symbols`);
      } else {
        evt.target.classList.remove(`invalid-email`);
        evt.target.setCustomValidity(``);
      }
      evt.target.reportValidity();
    },

    checkIconEmail: function (evt) {
      const emailInput = document.querySelector(`.form__input--email`);

      if (evt.target === emailInput) {
        const re = /\S+@\S+\.\S+/;
  
        if (re.test(emailInput.value)) {
          emailInput.style.background = `url("../img/check.svg") 98% center no-repeat`;
        } else {
          emailInput.style.background = `none`;
        }
      }
    }
  }
})();