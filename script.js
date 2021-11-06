$(document).ready(onReady);

let employees = [];


function onReady(){
    renderEmployeeData(employees);
    $('#submitButton').on('click', handleOnClicks)
    
    
};// end onReady


function renderEmployeeData(empToRender){
    // empty the table body
    $('#tableBody').empty();

    // loop through through the empToRender parameter and create new table row
    for (const employee of empToRender) {
        let newTableRow = `
        <tr>
            <td>${employee.first}</td>
            <td>${employee.last}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
        </tr>
        `
        // append the new row to the table body
        $('#tableBody').append(newTableRow);
    }
    
};// end renderEmployeeData


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
}