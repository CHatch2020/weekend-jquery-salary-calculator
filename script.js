$(document).ready(onReady);

let employees = [];


function onReady(){
    renderEmployeeData(employees);
    $('#submitButton').on('click', handleOnClicks);
    $('#tableBody').on('click', '#deleteButton', deleteEmployee);
    
};// end onReady


function renderEmployeeData(empToRender){
    // empty the table body
    $('#tableBody').empty();
    let deleteBut = $('.deleteButton');
    // loop through through the empToRender parameter and create new table row
    for (let employee of empToRender) {
        let newTableRow = `
        <tr>
            <td>${employee.first}</td>
            <td>${employee.last}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button id="deleteButton">Delete</button></td>
        </tr>
        `
        // append the new row to the table body
        $('#tableBody').append(newTableRow);
        $('#employee.delete').on('click', deleteEmployee)
    }
    
};// end renderEmployeeData


function renderTotalCost(salariesToSum){
let totalPrice = calculateTotalCost(salariesToSum) / 12;
let newTotal = $('#totalCost');
newTotal.empty();
newTotal.append(totalPrice);
};// end renderTotalCost

function calculateTotalCost(salariesToSum){
    // get total sum to equal zero
    let sum = 0;
    
    // loop through employees and add annual salaries to sum
    for (let salaries of salariesToSum) {
        sum += salaries.annualSalary;
    };
    // return sum
    return sum;
};// end calculateTotalCost


function handleOnClicks(){
// grab user values
let newFirst = $('#firstName').val();
let newLast = $('#lastName').val();
let newEmployeeId = $('#employeeId').val();
let newEmployeeTitle = $('#employeeTitle').val();
let newAnnualSalary = $('#annualSalary').val();

// assign values to new object
let newEmployee = {
    first: newFirst,
    last: newLast,
    id: Number(newEmployeeId),
    title: newEmployeeTitle,
    annualSalary: Number(newAnnualSalary),
};
// push new object to employees array
employees.push(newEmployee);
//empty variables
$('#firstName').val('');
$('#lastName').val('');
$('#employeeId').val('');
$('#employeeTitle').val('');
$('#annualSalary').val('');
// call render function
renderEmployeeData(employees);
renderTotalCost(employees);
};// end handleOnClicks


function deleteEmployee(){
    let index = $('#deleteButton').index(this);
    employees.splice(index);

    $(this).closest('tr').remove();
};// end deleteEmployee

