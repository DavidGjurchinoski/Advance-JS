$(window).on("load", function () {
  $("button:first").click(function () {
    $.ajax({
      type: "GET",
      url: "https://api.openaq.org/v1/cities",
      success: function (response) {
        $("#countryAJAX").html(``);
        for (let i = 0; i < 10; i++) {
          $("#countryAJAX").append(
            `<li>country: ${response.results[i].country}, name: ${response.results[i].name}, city: ${response.results[i].city}, count: ${response.results[i].count}, locations: ${response.results[i].locations}</li>`
          );
        }
      },
      error: (error) => {
        console.log(error.msg);
      },
    });
  });
});
