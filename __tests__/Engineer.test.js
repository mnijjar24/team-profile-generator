const Engineer = require("../lib/Engineer");


test('Engineer', () => {
    const engineer = new Engineer('Michelle', '30', 'example@engineering.com', 'example@github.com');

    expect(engineer).toEqual(expect.any(Object));
});

test('Engineer Params are being used properly', () => {
    const engineer = new Engineer('Michelle', '30', 'example@engineering.com', 'example@github.com');

    expect(engineer.name).toBe('Michelle');
    expect(engineer.id).toBe('30');
    expect(engineer.email).toBe('example@engineering.com');
    expect(engineer.github).toBe('example@github.com');
});

test('Get engineer github via getGithub()', () => {
    const engineer = new Engineer('Michelle', '30', 'example@engineering.com', 'example@github.com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Get engineer role', () => {
    const engineer = new Engineer('Michelle', '30', 'example@engineering.com', 'example@github.com');

    expect(engineer.getRole()).toBe('Engineer');
});

