$(document).ready(onReady);
let employee = {
    firstName: '',
    lastName: '',
    emplID: 0,
    title: '',
    salary: 0
};

let employees;
let totalAnnualSalary;


function onReady(){
    console.log('heck yeah');
    $("#addEmployee").on('click', addEmployee);
}

function addEmployee(){
    $(this).text()
}

function appendEmployees(){
    for(let employee of employees){
    // use jQuery to append new employee data to the table
    // call this function within the addEmployee function
    }
}

function calculateMonthly(){
    for (let employee of employees){
        totalAnnualSalary += employee.salary;
    }
    let monthly = totalAnnualSalary / 12;
    $("#monthlySalary").append(`$${monthly}.00`);
    if(monthly > 20000){
        $("monthlySalary").addClass("overBudget")
    }
}