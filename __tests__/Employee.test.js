const Employee = require ('../lib/Employee.js');

test('Creates an employee object', () => {
    const employee = new Employee('Chavo', 11, 'chavo@email.com');
    expect(employee.name).toBe('Chavo');
    expect(employee.id).toEqual(11);
    expect(employee.email).toBe('chavo@email.com');
    expect(employee.getRole()).toBe('Employee');
});

test("Get the employee's name", () => {
    const employee = new Employee('Chavo', 11, 'chavo@email.com');
    const expectedName = 'Chavo';
    expect(employee.getName()).toBe(expectedName);
});

test("Get the employees id", () => {
    const employee = new Employee('Chavo', 11, 'chavo@email.com');
    const expectedId = expect.any(Number);
    expect(employee.getId()).toEqual(expectedId);
});

test("Get the employees email", () => {
    const employee = new Employee('Chavo', 11, 'chavo@email.com');
    const expectedEmail = 'chavo@email.com';
    expect(employee.getEmail()).toBe(expectedEmail);
});

