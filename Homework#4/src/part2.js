"use strict";

$(window).on("load", () => {
  function checkInput(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof input == "string") {
          resolve(input.toUpperCase());
        } else {
          reject(input);
        }
      }, 4000);
    });
  }
  function showPromise(promise) {
    promise
      .then((success) => {
        console.log(success);
      })
      .catch((fail) => {
        console.log(fail);
      })
      .finally(() => {
        console.log("Promise finished!");
      });
  }
  showPromise(checkInput("something big"));
  showPromise(checkInput(1));
});
