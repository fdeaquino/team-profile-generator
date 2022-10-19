const Engineer = require ('../lib/Engineer.js');

test('Creates an Engineer object', () => {
    const engineer = new Engineer('Chavo', '1', 'chavo@email.com', 'chavo8');
    expect(engineer.name).toBe('Chavo');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('chavo@email.com');
    expect(engineer.github).toBe('chavo8');
});

test("Get the Engineer's name", () => {
    const engineer = new Engineer('Chavo', '1', 'chavo@email.com', 'chavo8');
    const expectedName = 'Chavo';
    expect(engineer.getName()).toBe(expectedName);
});

test("Get the Engineer's id", () => {
    const engineer = new Engineer('Chavo', '1', 'chavo@email.com', 'chavo8');
    const expectedId = '1';
    expect(engineer.getId()).toBe(expectedId);
});

test("Get the Engineer's email", () => {
    const engineer = new Engineer('Chavo', '1', 'chavo@email.com', 'chavo8');
    const expectedEmail = 'chavo@email.com';
    expect(engineer.getEmail()).toBe(expectedEmail);
});

test("Get the Engineer's github username", () => {
    const engineer = new Engineer('Chavo', '1', 'chavo@email.com', 'chavo8');
    const expectedGithub = 'chavo8';
    expect(engineer.getGithub()).toBe(expectedGithub);
});

