"use strict";
/**
 * Function to validate input email address based on RFC 2822 format and submit the form
 * if the email address is a valid address, else alert the user with the error message
 * @author: Muralidhar Chandrababu
 * @param {email} inputText Email address submitted by the user in the form.
 */
const ValidateEmail = (inputText) => {
  if (inputText.value.length === 0) {
    document.getElementById("invalidEmailLabel").innerHTML =
      "Please enter a valid email address";
    document.getElementById("emailFormGroup").classList.add("invalid");
    document.getElementById("emailLabel").innerHTML = "";
    return false;
  }
  // mail format based on RFC 2822
  let mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (inputText.value.match(mailformat)) {
    document.getElementById("emailLabel").innerHTML = "Email";
    document.getElementById("invalidEmailLabel").innerHTML = "";
    window.location("emailSearchResult.html?email=" + inputText.value, "_self");
    return true;
  } else {
    document.getElementById("invalidEmailLabel").innerHTML =
      "Please add a valid email address";
    document.getElementById("emailFormGroup").classList.add("invalid");
    document.getElementById("emailLabel").innerHTML = "";
    return false;
  }
};
