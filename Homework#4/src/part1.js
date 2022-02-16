"use strict";

$(window).on("load", () => {
  function getUser(url, id, displayFunc) {
    $.ajax({
      type: "GET",
      url: url + id,
      dataType: "json",
      success: function (response) {
        displayFunc(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  function displayUser(user) {
    $("#tittle").text(user.title);
    $("#userId").text(`Id of user ${user.id}`);
    $("#body").text(user.body);
  }

  $("button:first").click(() => {
    getUser(
      "https://jsonplaceholder.typicode.com/posts/",
      prompt("Enter the id of a user"),
      displayUser
    );
  });

  getUser("https://jsonplaceholder.typicode.com/posts/", "1", displayUser);
});
