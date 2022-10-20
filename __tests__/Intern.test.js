const Intern = require ('../lib/Intern.js');

test("Get the Intern's school", () => {
    const intern = new Intern('Chavo', 11, 'chavo@email.com', 'TEXAS');
    // expect(intern.school).toBe('TEXAS');
    expect(intern.getSchool()).toBe('TEXAS');
});

test("Get the Intern's Role", () => {
    const intern = new Intern('Chavo', 11, 'chavo@email.com', 'TEXAS');
    expect(intern.getRole()).toBe('Intern');
})