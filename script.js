$(document).ready(onReady);

let employees = [
    {
        first: 'James',
        last: 'Stewart',
        id: 4536,
        title: 'Team Manager',
        annualSalary: 654000,
    }
];


function onReady(){
    renderEmployeeData(employees);
    
    
    
};// end onReady


function renderEmployeeData(empToRender){
    $('#tableBody').empty();

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

        $('#tableBody').append(newTableRow);
    }
    
};// end renderEmployeeData