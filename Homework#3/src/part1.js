$(window).on("load", () => {
  function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
  }

  let productArray = [
    new Product("Dobra Voda", "Drink", false, 50),
    new Product("Mleko", "Drink", true, 65),
    new Product("Marulka", "Food", true, 20),
    new Product("Sol", "Food", false, 40),
    new Product("Kafe", "Drink", false, 15),
    new Product("Pileski Gradi", "Food", false, 255),
    new Product("Meleno Meshano", "Food", false, 109),
    new Product("Urda", "Drink", false, 70),
    new Product("Pavlaka", "Food", true, 96),
    new Product("Sladoled", "Food", false, 122),
    new Product("Kashkaval", "Food", true, 215),
    new Product("Morkov", "Food", true, 26),
    new Product("Kisela Voda", "Drink", false, 20),
    new Product("Tortila Wraps", "Food", false, 70),
    new Product("Apple", "Food", false, 30),
  ];

  console.log(
    "Products over 20 price are:" +
      productArray
        .filter((product) => product.price > 20)
        .map((product) => `\n ${product.name} - ${product.price} den`)
  );

  console.log(
    "Food Products on discount:" +
      productArray
        .filter(
          (product) =>
            product.category.toLowerCase() == "food" && product.hasDiscount
        )
        .map((product) => `\n ${product.name}`)
  );

  let i = 0;
  console.log(
    `Average Price of discount Products \n 
      ${
        productArray
          .filter((product) => product.hasDiscount)
          .map((product) => product.price)
          .reduce((sum, price) => {
            i++;
            return (sum += price);
          }, 0) / i
      }`
  );

  console.log(
    `Vowel not on Discount:
            ${productArray
              .filter(
                (product) =>
                  (product.name[0].toLowerCase() == "a" ||
                    product.name[0].toLowerCase() == "e" ||
                    product.name[0].toLowerCase() == "i" ||
                    product.name[0].toLowerCase() == "o" ||
                    product.name[0].toLowerCase() == "u") &&
                  !product.hasDiscount
              )
              .map((product) => `\n ${product.name} - ${product.price} den`)}`
  );

  let newArray = [];
  for (let item of productArray) {
    newArray.push(item);
  }

  console.log(newArray.sort((prev, next) => prev.price - next.price));
});
