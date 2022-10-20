const Manager = require ('../lib/Manager.js');

test("Get the Manager's Role", () => {
    const manager = new Manager('Chavo', '1', 'chavo@email.com', 100);
    expect(manager.getRole()).toBe('Manager');
});

test("Get the manager's office number", () => {
    const manager = new Manager('Chavo', '1', 'chavo@email.com', 100);
    const expectedOfficeNum = expect.any(Number);
    expect(manager.getOfficeNum()).toEqual(expectedOfficeNum);
});

