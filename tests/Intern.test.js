const Intern = require('../lib/Intern');

test('Can set school via constructor', () => {
    const testValue = "OSU";
    const e = new Intern('Emily', 1, 'test@email.com', testValue);
    expect(e.school).toBe(testValue);
});

test('getRole() should return \'Intern\'', () => {
    const testValue = "Intern";
    const e = new Intern('Emily', 1, 'test@email.com', 'OSU');
    expect(e.getRole()).toBe(testValue);
});

test('Can get school via getSchool()', () => {
    const testValue = "OSU";
    const e = new Intern('Emily', 1, 'test@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});



