$(window).on("load", function () {
  $("button:last").click(function () {
    $.ajax({
      type: "GET",
      url: "https://dog.ceo/api/breed/hound/images",
      success: function (response) {
        $("#dogImages").html("");
        for (let item of response.message) {
          $("#dogImages").append(`<img src="${item}" alt="Image Not Found">`);
        }
      },
    });
  });
});
