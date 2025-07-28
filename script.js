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
            <td>${student.fullName} </td>
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
