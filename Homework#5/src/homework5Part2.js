$(window).on("load", () => {
  function getCountryCurrency() {
    return $.ajax({
      type: "GET",
      url: "https://restcountries.com/v3.1/capital/tallinn",
      success: (response) => {},
    });
  }

  function getCountriesWithCurrency(currency) {
    return $.ajax({
      type: "GET",
      url: `https://restcountries.com/v3.1/currency/${currency}`,
      success: function (response) {},
    });
  }

  async function printAsync(func1, func2) {
    console.log(`Started`);
    let response = await func1();
    console.log(Object.keys(response[0].currencies)[0]);
    let response2 = await func2(Object.keys(response[0].currencies)[0]);
    console.log(response2.length);
    console.log(`Ended`);
  }

  printAsync(getCountryCurrency, getCountriesWithCurrency);
});
