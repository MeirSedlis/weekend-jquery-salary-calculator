$(document).ready(onReady);

let employees = [
  {
    firstName: "Stede",
    lastName: "Bonnet",
    emplID: "1234",
    title: "Co-Captain",
    salary: 90000,
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
    emplID: "1234",
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
let totalAnnualSalary;

function onReady() {
  appendEmployees;
  $("#addEmployee").on("click", addEmployee);
}

function addEmployee() {
  //   calculateMonthly;
  console.log(employees[3].firstName);
}

function appendEmployees() {
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
        <button>Submit</button>
    </tr>
    `);
  }
}

function calculateMonthly() {
  for (let employee of employees) {
    totalAnnualSalary += employee.salary;
  }
  let monthly = totalAnnualSalary / 12;
  $("#monthlySalary").append(`$${monthly}.00`);
  if (monthly > 20000) {
    $("monthlySalary").addClass("overBudget");
  }
}
