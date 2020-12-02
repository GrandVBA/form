`use strict`;

(function () {
  const content = document.querySelector(`.content`);
  const contentWrp = document.querySelector(`.content__wrp`);
  const contentSignIn = document.querySelector(`.content__sign-in`);

  const renderFeedbackMessage = function (title, text) {
    const feedbackTemplate = document.querySelector(`#feedback`)
    .content
    .querySelector(`.feedback`);

    const feedbackMessage = feedbackTemplate.cloneNode(true);

    feedbackMessage.querySelector(`.feedback__title`).textContent = title;
    feedbackMessage.querySelector(`.feedback__text`).textContent = text;

    return feedbackMessage;
  }
  
  window.submitHandler = function (el) {
    window.upload(
      new FormData(el), 
      function () {
        contentWrp.classList.add(`hidden`);
        content.insertBefore(renderFeedbackMessage(
          `Thank You!`,
          `you registered!`),
          contentSignIn);
    }, 
      function (title, text) {
        contentWrp.classList.add(`hidden`);
        content.insertBefore(renderFeedbackMessage(title, text), contentSignIn);
    });
  }
})();