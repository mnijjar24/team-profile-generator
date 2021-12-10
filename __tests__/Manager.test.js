const Manager = require("../lib/Manager");

test('Manager', () => {
    const manager = new Manager('Nijjar', '42', 'example@manager.com', '6');

    expect(manager).toEqual(expect.any(Object));
});

test('Manager params are bing used properly', () => {
    const manager = new Manager('Nijjar', '42', 'example@manager.com', '6');

    expect(manager.name).toBe('Nijjar');
    expect(manager.id).toBe('42');
    expect(manager.email).toBe('example@manager.com');
    expect(manager.officeNumber).toBe('6');
});

test('Get manager role via getRole()', () => {
    const manager = new Manager('Nijjar', '42', 'example@manager.com', '6');

    expect(manager.getRole()).toBe('Manager');
});

