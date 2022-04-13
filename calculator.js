$(document).ready(onReady);

let employees = [
  {
    firstName: "Stede",
    lastName: "Bonnet",
    emplID: "1234",
    title: "Co-Captain",
    salary: 0,
  },
  {
    firstName: "Roach",
    lastName: "The Pirate",
    emplID: "1734",
    title: "Cook",
    salary: 50000,
  },
  {
    firstName: "Black",
    lastName: "Pete",
    emplID: "1910",
    title: "Crewmate",
    salary: 45000,
  },
  {
    firstName: "Edward 'Blackbeard'",
    lastName: "Teach",
    emplID: "2234",
    title: "Co-Captain",
    salary: 90000,
  },
];

function onReady() {
  $("document").ready(appendEmployees);
  $("#addEmployee").on("click", addEmployee);
  $("#addEmployee").on("click", calculateMonthly);
  $("#addEmployee").on("click", appendEmployees);
  $(document).on("click", ".deleteButton", deleteEmployee);
}

function addEmployee() {
  if ($("#firstNameInput").val() === "") {
    alert("Please populate the form to continue");
    return;
  }
  let newEmployee = {
    firstName: $("#firstNameInput").val(),
    lastName: $("#lastNameInput").val(),
    emplID: $("#emplIDInput").val(),
    title: $("#titleInput").val(),
    salary: $("#salaryInput").val(),
  };
  employees.push(newEmployee);
  $("#firstNameInput").val("");
  $("#lastNameInput").val("");
  $("#emplIDInput").val("");
  $("#titleInput").val("");
  $("#salaryInput").val("");
}

function appendEmployees() {
  $("#empList").empty();
  for (let employee of employees) {
    // use jQuery to append new employee data to the table
    // call this function within the addEmployee function
    $("#empList").append(`
    <tr>
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>${employee.emplID}</td>
      <td>${employee.title}</td>
      <td>${employee.salary}</td>
      <td><button class="prettyButton deleteButton">Delete</button></td>
    </tr>
    `);
  }
}

function calculateMonthly() {
  let totalAnnualSalary = 0;
  for (let employee of employees) {
    totalAnnualSalary += Number(employee.salary);
  }
  let monthly = (totalAnnualSalary / 12).toFixed(2);
  $("#monthlySalary").text(`$${monthly}`);
  if (monthly > 20000) {
    $("#monthlySalary").addClass("overBudget");
    alert("You're over budget!");
  }
  return monthly;
}

function deleteEmployee() {
  $(this).closest("tr").remove();
}
