"use strict";
/**
 * Below function is an immediately invoked function expression executed to register event listeners on email input element
 * @author: Muralidhar Chandrababu
 */
(function () {
  setTimeout(() => {
    if (document.getElementById("email").value.length > 0) {
      document.getElementById("emailFormGroup").classList.add("active");
    }
  }, 200);

  const registerEventListeners = () => {
    let formGroupContainer = document.getElementById("emailFormGroup");

    if (formGroupContainer.querySelector("input")) {
      let emailElement = formGroupContainer.querySelector("input#email");

      emailElement.addEventListener("focus", function (e) {
        let target = e.target;
        target.parentNode.classList.add("active");
      });

      emailElement.addEventListener("blur", function (e) {
        let target = e.target;
        if (!target.value) {
          target.parentNode.classList.remove("active");
        }
      });
    }
  };

  registerEventListeners();
})();
