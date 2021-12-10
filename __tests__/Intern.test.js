const Intern = require("../lib/Intern");

test('Intern', () => {
    const intern = new Intern('Rolly', '12', 'example@intern.com', 'UofT');

    expect(intern).toEqual(expect.any(Object));
});

test('Intern Params are being used properly', () => {
    const intern = new Intern('Rolly', '12', 'example@intern.com', 'UofT');

    expect(intern.name).toBe('Rolly');
    expect(intern.id).toBe('12');
    expect(intern.email).toBe('example@intern.com');
    expect(intern.school).toBe('UofT');
});

test('Get intern school via getSchool()', () => {
    const intern = new Intern('Rolly', '12', 'example@intern.com', 'UofT');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Get intern role via getRole()', () => {
    const intern = new Intern('Rolly', '12', 'example@intern.com', 'UofT');

    expect(intern.getRole()).toBe('Intern');
});

