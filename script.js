const numbers = function (max, min) {
  console.log((max - min) * Math.random() + min);
  return min * Math.random();
};

const students = [
  {
    fullName: "amrullah",
    fatherName: "Said Shah",
    rollNo: 955465,
    marks: "Ph(F), Ch(F)",
    group: "Science",
    class: "9th",
  },
  {
    fullName: "amrullah",
    fatherName: "Said Shah",
    rollNo: 956465,
    marks: "474",
    group: "Science",
    class: "9th",
  },
];

const resultBtn = document.querySelector(".btn-result");
const inputFullName = document.querySelector(".name-input");
const inputRollNo = document.querySelector(".roll-no-input");
const form = document.querySelector(".form");
const containerShowResult = document.querySelector(".result-show-container");
const spinner = document.querySelector(".spinner");
const resultText = document.querySelector(".result-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  spinner.classList.remove("hidden");

  const studentName = inputFullName.value.toLowerCase();
  const studentRollNo = +inputRollNo.value;
  const studentRollNoExist = students.some(
    (student) => +inputRollNo.value === student.rollNo
  );
  inputFullName.value = inputRollNo.value = "";
  inputFullName.blur();
  inputRollNo.blur();
  const studentNameExist = students.some(
    (student) => studentName === student.fullName
  );

  if (isNaN(studentRollNo) || !(studentRollNoExist && studentNameExist)) {
    containerShowResult.innerHTML = ` <span class="spinner-2"></span> `;
    resultText.textContent = "Checking...";
    const html = ` <div class="alert-warning">
                        <h2>Warning</h2>
                        <p>
                        No student record found. Please double check the particulars
                        entered.
                        </p>
                        <p>مزید معلومات کے لئے ویب ماسٹر مردان بورڈ سے رابطہ کریں</p>
                      </div>`;
    setTimeout(() => {
      spinner.classList.add("hidden");
      containerShowResult.innerHTML = "";
      resultText.textContent = "Check Result";

      return containerShowResult.insertAdjacentHTML("afterbegin", html);
    }, 1500);
  }

  if (studentNameExist && studentRollNoExist) {
    containerShowResult.innerHTML = ` <span class="spinner-2"></span> `;
    resultText.textContent = "Checking...";

    const student = students.find(
      (student) =>
        student.fullName === studentName && student.rollNo === studentRollNo
    );
    const fullName =
      student.fullName.slice(0, 1).toUpperCase() + student.fullName.slice(1);
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
            <td>${fullName} </td>
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
          <span>Disclainer</span>: This result is issued provisionally, errors and omission expected a sa notice only.Any entry appearing on the website does not confer any right or privilege on a candidate for the grant of certificate which will be issued under the rules/regulations on the basis of the original record of the board.
        </footer>`;

    return setTimeout(function () {
      containerShowResult.innerHTML = "";

      spinner.classList.add("hidden");
      resultText.textContent = "Check Result";
      containerShowResult.insertAdjacentHTML("afterbegin", html);
    }, 1500);
  }
  // containerShowResult.innerHTML = "";

  // const html = `<h6 class="message">
  //         دیے گئے فارم کو بھرنے کے بعد بٹن پہ کلک کرنے سے رزلٹ (نتیجہ)اس خانے
  //         میں دیکھائی دے گا
  //       </h6>`;
  // return containerShowResult.insertAdjacentHTML("afterbegin", html);
  // console.log("below");
});
