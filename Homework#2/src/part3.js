console.log("========================PART 3============================");
let firstName = ["David", "AnaMarija", "Steve", "Ana", "Jeff"];
let lastName = ["Dayna", "Angelus", "Thyra", "Damiana", "Charlize"];

for (let i in firstName) {
  ((name, lName) => {
    console.log(`${name} ${lName}`);
  })(firstName[i], lastName[i]);
}
