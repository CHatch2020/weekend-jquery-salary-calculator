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
        `
        // append the new row to the table body
        $('#tableBody').append(newTableRow);
        // call the deleteEmployee function
        $('#employee.delete').on('click', deleteEmployee)
    }
    
};// end renderEmployeeData

// function to render the total cost
function renderTotalCost(salariesToSum){
    // call the calculate function and divide it by 12
let totalMonthy = calculateTotalCost(salariesToSum) / 12;

// grab and clear the spot to place this sum
let newTotal = $('#totalCost');

// round the totalMonthly
let roundedTotalMonthly = (totalMonthy).toFixed(2);

// empty it
newTotal.empty();

// append the total monthly
newTotal.append(roundedTotalMonthly);

// check if total monthly > 20,000; add red background if yes
if (roundedTotalMonthly > 20000) {
    $('#money').addClass('redBackground');
} else {
    $('#money').removeClass('redBackground');
}
};// end renderTotalCost

// create function to calculate total cost
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


// function to handle on the click
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
// push new object to employees array if fields are full
if (newFirst === '' || newLast === '' || newEmployeeId === 0 || newEmployeeTitle === '' || newAnnualSalary === '') {
    alert('Fields are empty')
} else {
    employees.push(newEmployee);
};

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

// function for deleting employees
function deleteEmployee(){
    // assign a variable to get the id from the closest tr on the click
    let val = $(this).closest('tr').find('.dataId').text();
    // find the index and return that 
    index = employees.findIndex(function(item) {return item.id == val})
    // splice the row 
    employees.splice(index, 1);

    // remove the row
    $(this).closest('tr').remove();
    renderEmployeeData(employees);
    renderTotalCost(employees);
};// end deleteEmployee


