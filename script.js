const numbers = function (max, min) {
  console.log((max - min) * Math.random() + min);
  return min * Math.random();
};

const students = [
  {
    fullName: "amrullah",
    fatherName: "Said Shah",
    rollNo: 955465,
    marks: "ph(F), Bio(F)",
    group: "Science",
    class: "9th",
  },
];

const resultBtn = document.querySelector(".btn-result");
const inputFullName = document.querySelector(".name-input");
const inputRollNo = document.querySelector(".roll-no-input");
const form = document.querySelector(".form");
const containerShowResult = document.querySelector(".result-show-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const studentName = inputFullName.value.toLowerCase();
  const studentRollNo = +inputRollNo.value;
  console.log(studentName);
  console.log(+inputRollNo.value);
  if (
    isNaN(studentRollNo) ||
    (students.some((student) => +inputRollNo.value !== student.rollNo) &&
      students.some((student) => studentName !== student.fullName))
  ) {
    containerShowResult.innerHTML = "";

    console.log("Error");
  }
  console.log();
  conta;
  if (studentName && studentRollNo) {
    console.log(studentName);
    const student = students.find(
      (student) =>
        student.fullName === studentName && student.rollNo === studentRollNo
    );
    console.log(student);
    const html = `   <header>
          <img
            src="images/logo.png"
            alt="Mardan board logo"
            class="logo"
            height="90"
            width="88"
          />
          <div>
            <h2>Board of Intermediate & secondary education, mardan</h2>
            <h3>Result card (SSC) annual examination 2025</h3>
          </div>
        </header>

        <table>
          <tr class="roll-no">
            <td>Roll No</td>
            <td>${student.rollNo}</td>
          </tr>
          <tr>
            <td>Class</td>
            <td>${student.class} </td>
          </tr>
          <tr>
            <td>Group</td>
            <td>${student.group} </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>${student.name} </td>
          </tr>
          <tr>
            <td>Father Name</td>
            <td>${student.fatherName} </td>
          </tr>
          <tr>
            <td>Marks</td>
            <td>${student.marks} </td>
          </tr>
          <tr>
            <td>Grades</td>
            <td></td>
          </tr>
          <tr>
            <td>Remarks</td>
            <td></td>
          </tr>
        </table>
          <footer>
          <span>Disclainer</span>: Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Temporibus corporis, sit voluptas sint deleniti
          eaque qui aspernatur impedit id vero, alias numquam dolore. Possimus
          error cum consectetur atque, ipsum rerum!
        </footer>`;

    return setTimeout(function () {
      containerShowResult.innerHTML = "";

      containerShowResult.insertAdjacentHTML("afterbegin", html);
    }, 3000);
  }
  containerShowResult.innerHTML = "";

  const html = `<h6 class="message">
          دیے گئے فارم کو بھرنے کے بعد بٹن پہ کلک کرنے سے رزلٹ (نتیجہ)اس خانے
          میں دیکھائی دے گا
        </h6>`;
  return containerShowResult.insertAdjacentHTML("afterbegin", html);
  console.log("below");
});
