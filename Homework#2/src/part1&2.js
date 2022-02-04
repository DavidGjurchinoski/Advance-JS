$(window).on("load", function () {
  let nextPage = "";
  let prevPage = "";
  $("#next").hide();
  $("#prev").hide();

  $("#part1").click(function () {
    callPlanet(prompt("Enter Starting planet number"));
  });
});

$("#next").click(function () {
  nextFunction(nextPage);
});
$("#prev").click(function () {
  prevFunction(prevPage);
});

let nextFunction = (nextPage) => {
  if (!nextPage) return;
  callPlanet("", nextPage);
};
let prevFunction = (prevPage) => {
  if (!prevPage) return;
  callPlanet("", prevPage);
};

function callPlanet(planetPage, url = null) {
  $.ajax({
    type: "GET",
    url: `${
      url
        ? url
        : `https://swapi.dev/api/planets/?page=${
            isNaN(Math.abs(planetPage)) ? "1" : planetPage
          }`
    }`,
    success: function (response) {
      $("#part1").hide();
      $("#part1Table").html("");
      $("#part1Table").append(
        `<tr><th>Planet Name</th><th>Planet Gravity</th><th>Planet Population</th><th>Planet Climate</th></tr>`
      );
      for (let item of response.results) {
        $("#part1Table").append(
          `<tr><td>${item.name}</td><td>${item.gravity}</td><td>${item.population}</td><td>${item.climate}</td></tr>`
        );
      }
      if (response.next) {
        nextPage = response.next;
        $("#next").show();
      } else {
        $("#next").hide();
      }
      if (response.previous) {
        prevPage = response.previous;
        $("#prev").show();
      } else {
        $("#prev").hide();
      }
    },
    error: (error) => {
      console.log(error.responseJSON.detail);
    },
  });
}
