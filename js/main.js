`use strict`;

(function () {
  const start = function () {
    const form = document.querySelector(`.form`);
    const firstNameInput = document.querySelector(`.form__input--f-name`);
    const formBtn = document.querySelector(`.form__submit`);
    const emailInput = document.querySelector(`.form__input--email`);
    const passInput = document.querySelector(`.form__input--password`);

    firstNameInput.focus();

    form.addEventListener(`input`, function (evt) { 
      window.validation.maxValue(evt);
      window.validation.checkIconEmail(evt);
      if (evt.target.value !== ``) {
        evt.target.classList.remove(`invalid`);
      }
    }, true);

    form.addEventListener(`submit`, function (evt) {
      evt.preventDefault();
      if (window.validation.main(emailInput.value, passInput.value)) {
        formBtn.setAttribute(`disabled`, `disabled`);
        window.submitHandler(form);
      }
    }, true);
  };

  start();
})();