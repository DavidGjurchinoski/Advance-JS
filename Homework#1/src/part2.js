let newObjectArray = [];
let newObjectNames = [];
let counter = 0;
$(window).on("load", function () {
  $("#user").click(function () {
    $("table:first").html(``);
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        newObjectNames.push("user");
        newObjectArray.push(data);
        for (let object of newObjectArray) {
          $("table:first").append(`<tr><th>${showName()}</th></tr>`);
          checkAndCreate(object);
        }
        console.log(newObjectNames);
      });
  });
});

function checkAndCreate(object) {
  againObject = false;
  for (let key in object) {
    if (typeof object[key] == "object") {
      newObjectNames.push(key);
      newObjectArray.push(object[key]);
    } else {
      $("table:first").append(
        `<tr> <td>
                ${key}: ${object[key]}
                </td></tr>`
      );
    }
  }
}

function showName() {
  return newObjectNames[counter++];
}
