$(document).ready(onReady);

let employees = [];

function onReady() {
  renderEmployeeData(employees);
  $("#submitButton").on("click", addNewEmployee);
  $("#tableBody").on("click", "#deleteButton", deleteEmployee);
} // end onReady

function renderEmployeeData(empToRender) {
  // empty the table body
  $("#tableBody").empty();
  let deleteBut = $(".deleteButton");
  // loop through through the empToRender parameter and create new table row
  for (let employee of empToRender) {
    // create the new row
    let newTableRow = `
        <tr>
            <td>${employee.first}</td>
            <td>${employee.last}</td>
            <td class="dataId">${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button id="deleteButton">Delete</button></td>
        </tr>
        `;
    // append the new row to the table body
    $("#tableBody").append(newTableRow);
    // call the deleteEmployee function
    $("#employee.delete").on("click", deleteEmployee);
  }
} // end renderEmployeeData

// function to render the total cost
function renderTotalCost(salariesToSum) {
  // call the calculate function and divide it by 12
  let totalMonthy = calculateTotalCost(salariesToSum) / 12;

  // grab and clear the spot to place this sum
  let newTotal = $("#totalCost");

  // round the totalMonthly
  let roundedTotalMonthly = totalMonthy.toFixed(2);

  // empty it
  newTotal.empty();

  // append the total monthly
  newTotal.append(roundedTotalMonthly);

  // check if total monthly > 20,000; add red background if yes
  if (roundedTotalMonthly > 20000) {
    $("#money").addClass("redBackground");
  } else {
    $("#money").removeClass("redBackground");
  }
} // end renderTotalCost

// create function to calculate total cost
function calculateTotalCost(salariesToSum) {
  // get total sum to equal zero
  let sum = 0;

  // loop through employees and add annual salaries to sum
  for (let salaries of salariesToSum) {
    sum += salaries.annualSalary;
  }
  // return sum
  return sum;
} // end calculateTotalCost

// function to handle on the click
function addNewEmployee() {
  // assign values to new object
  let newEmployee = {
    first: $("#firstName").val(),
    last: $("#lastName").val(),
    id: Number($("#employeeId").val()),
    title: $("#employeeTitle").val(),
    annualSalary: Number($("#annualSalary").val()),
  };

  // if fields are empty give alert
  if (checkInputs(newEmployee)) {
    alert("Fields are empty");
    return;
  }
  // push new Employee
  employees.push(newEmployee);

  //empty variables
  emptyInputs();

  // call render function
  renderEmployeeData(employees);
  renderTotalCost(employees);
} // end addNewEmployee

// function for deleting employees
function deleteEmployee() {
  // assign a variable to get the id from the closest tr on the click
  let val = $(this).closest("tr").find(".dataId").text();
  // find the index and return that
  index = employees.findIndex(function (item) {
    return item.id == val;
  });
  // splice the row
  employees.splice(index, 1);

  // remove the row
  $(this).closest("tr").remove();
  renderEmployeeData(employees);
  renderTotalCost(employees);
} // end deleteEmployee

function checkInputs(employee) {
  if (
    employee.first === "" ||
    employee.last === "" ||
    employee.id === 0 ||
    employee.title === "" ||
    employee.annualSalary === ""
  ) {
    return true;
  } else {
    return false;
  }
} // end checkInputs

function emptyInputs() {
  $("#firstName").val("");
  $("#lastName").val("");
  $("#employeeId").val("");
  $("#employeeTitle").val("");
  $("#annualSalary").val("");
} // end emptyInputs
