const Intern = require ('../lib/Intern.js');

test('Creates an Intern object', () => {
    const intern = new Intern('Chavo', '1', 'chavo@email.com', 'TEXAS');
    expect(intern.name).toBe('Chavo');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('chavo@email.com');
    expect(intern.school).toBe('TEXAS');
});

test("Get the Intern's name", () => {
    const intern = new Intern('Chavo', '1', 'chavo@email.com', 'TEXAS');
    const expectedName = 'Chavo';
    expect(intern.getName()).toBe(expectedName);
});

test("Get the Intern's id", () => {
    const intern = new Intern('Chavo', '1', 'chavo@email.com', 'TEXAS');
    const expectedId = '1';
    expect(intern.getId()).toBe(expectedId);
});

test("Get the Intern's email", () => {
    const intern = new Intern('Chavo', '1', 'chavo@email.com', 'TEXAS');
    const expectedEmail = 'chavo@email.com';
    expect(intern.getEmail()).toBe(expectedEmail);
});

test("Get the Intern's school or university", () => {
    const intern = new Intern('Chavo', '1', 'chavo@email.com', 'TEXAS');
    const expectedSchool = 'TEXAS';
    expect(intern.getSchool()).toBe(expectedSchool);
});

