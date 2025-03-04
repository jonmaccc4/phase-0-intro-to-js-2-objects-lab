

// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };

} 

const employee = { name: 'Hassan'}

describe(`updateEmployeeWithKeyAndValue`, () => {

    let employee;

    beforeEach(() => {

        employee = { name: 'Hassan'};
    });

    it('returns an employee with the original key value pairs and the new key value pair', () => {

        const updateEmployeeWithKeyAndValue = updateEmployeeWithKeyAndValue(employee, 'position', 'Developer');

        expect(updateEmployee).toEqual( { name: 'Hassan', position: 'Developer' });
    });
});

describe('destructivelyUpdateEmployeeWithKeyAndValue', () => {
    let employee;

    beforeEach(() => {
       
        employee = { name: 'Hassan' };
    });

    it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', () => {
        
        const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'position', 'Developer');

       
        expect(updatedEmployee).toEqual({ name: 'Hassan',  position: 'Developer' });

        expect(employee).toEqual({ name: 'Hassan', position: 'Developer' });
    });
});

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;
}


 employee = { name: "John", role: "Developer" };
destructivelyUpdateEmployeeWithKeyAndValue(employee, "role", "Manager");
console.log(employee); 

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }; 
    delete newEmployee[key]; 
    return newEmployee; 
}


 employee = { name: "John", role: "Developer" };
let updatedEmployee = deleteFromEmployeeByKey(employee, "role");

console.log(updatedEmployee); 
console.log(employee); 

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Mutates the original object
    return employee; // Returns the modified object
}


 employee = { name: "John", role: "Developer" };
destructivelyDeleteFromEmployeeByKey(employee, "role");

console.log(employee); 