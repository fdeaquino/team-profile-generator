const Employee = require ('../lib/Employee.js');

test('Creates an employee object', () => {
    const employee = new Employee('Chavo', '1', 'chavo@email.com');
    expect(employee.name).toBe('Chavo');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('chavo@email.com');
});

test("Get the employee's name", () => {
    const employee = new Employee('Chavo', '1', 'chavo@email.com');
    const expectedName = 'Chavo';
    expect(employee.getName()).toBe(expectedName);
});

test("Get the employees id", () => {
    const employee = new Employee('Chavo', '1', 'chavo@email.com');
    const expectedId = '1';
    expect(employee.getId()).toBe(expectedId);
});

test("Get the employees email", () => {
    const employee = new Employee('Chavo', '1', 'chavo@email.com');
    const expectedEmail = 'chavo@email.com';
    expect(employee.getEmail()).toBe(expectedEmail);
});

