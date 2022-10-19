const Manager = require ('../lib/Manager.js');

test('Creates an manager object', () => {
    const manager = new Manager('Chavo', '1', 'chavo@email.com', '100');
    expect(manager.name).toBe('Chavo');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('chavo@email.com');
    expect(manager.officeNumber).toBe('100');
});

test("Get the manager's name", () => {
    const manager = new Manager('Chavo', '1', 'chavo@email.com', '100');
    const expectedName = 'Chavo';
    expect(manager.getName()).toBe(expectedName);
});

test("Get the manager's id", () => {
    const manager = new Manager('Chavo', '1', 'chavo@email.com', '100');
    const expectedId = '1';
    expect(manager.getId()).toBe(expectedId);
});

test("Get the manager's email", () => {
    const manager = new Manager('Chavo', '1', 'chavo@email.com', '100');
    const expectedEmail = 'chavo@email.com';
    expect(manager.getEmail()).toBe(expectedEmail);
});

test("Get the manager's office number", () => {
    const manager = new Manager('Chavo', '1', 'chavo@email.com', '100');
    const expectedOfficeNum = '100';
    expect(manager.getOfficeNum()).toBe(expectedOfficeNum);
});

