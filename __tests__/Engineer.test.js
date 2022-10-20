const Engineer = require ('../lib/Engineer.js');

test("Get the Engineer's role", () => {
    const engineer = new Engineer('Chavo', '1', 'chavo@email.com', 'chavo8');
    
    expect(engineer.getRole()).toBe('Engineer');
});

test("Get the Engineer's github username", () => {
    const engineer = new Engineer('Chavo', '1', 'chavo@email.com', 'chavo8');
    const expectedGithub = expect.any(String);
    expect(engineer.getGithub()).toEqual(expectedGithub);
});

