console.log("================PART BONUS======================");
let sum = 1;
function factorial(num) {
  sum *= num;
  num != 1 ? factorial(num - 1) : console.log(sum);
}

factorial(5);
