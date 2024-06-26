document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "short" });
  const year = today.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  document.querySelector("._currentDate").textContent = formattedDate;
});

const ageCalculate = () => {
  const dateInput = document.getElementById("_date").value;
  if (!dateInput) {
    alert("Please enter your date of birth.");
    return;
  }

  const dob = new Date(dateInput);
  const today = new Date();

  if (dob > today) {
    alert("The date of birth cannot be in the future.");
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("_resultDay").textContent = days;
  document.getElementById("_resultMonth").textContent = months;
  document.getElementById("_resultYear").textContent = years;
};
