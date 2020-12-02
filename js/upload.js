'use strict';

(function () {
  const URL = `http://httpbin.org/post`;

  const TIMEOUT_IN_MS = 10000;

  window.upload = function (data, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      onSuccess(xhr.response);
    });

    xhr.addEventListener('error', function () {
      onError(`Error!`, `Connection error!`);
    });

    xhr.addEventListener('timeout', function () {
      onError('Error!', 'There is no answer for ' + (xhr.timeout / 100) + ' seconds');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();