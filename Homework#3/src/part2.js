$(window).on("load", () => {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
    success: function (response) {
      console.log(
        "Students with Avrg Grades over 3:" +
          response
            .filter((student) => student.averageGrade > 3)
            .map((student) => {
              return `\n ${student.firstName} has an avrage grade of ${student.averageGrade}`;
            })
      );

      console.log(`
      Famale students with average grade of 5:
      ${response
        .filter(
          (student) =>
            student.gender.toLowerCase() == "female" &&
            student.averageGrade == 5
        )
        .map((student) => {
          return `\n ${student.firstName}`;
        })}`);

      console.log(`
        All male student full names who live in Skopje and are over 18 years old:
        ${response
          .filter(
            (student) =>
              student.gender.toLowerCase() == "male" &&
              student.city.toLowerCase() == "skopje" &&
              student.age > 18
          )
          .map((student) => {
            return getFullName(student);
          })}`);

      console.log(`
          The average grades of all female students over the age of 24
          ${response
            .filter(
              (student) =>
                student.gender.toLowerCase() == "female" && student.age > 24
            )
            .map((student) => {
              return `${getFullName(student)} avrage grade: ${
                student.averageGrade
              }`;
            })}`);

      console.log(`
        All male students with a name starting with B and average grade over 2
        ${response
          .filter(
            (student) =>
              student.gender.toLowerCase() == "male" &&
              student.firstName[0].toLowerCase() == "b" &&
              student.averageGrade > 2
          )
          .map((student) => {
            return `${getFullName(student)} and a average grade ${
              student.averageGrade
            }`;
          })}`);
    },
    error: (error) => {
      alert(error.responseJSON.data);
    },
  });

  function getFullName(student) {
    return `\n ${student.firstName} ${student.lastName}`;
  }
});
