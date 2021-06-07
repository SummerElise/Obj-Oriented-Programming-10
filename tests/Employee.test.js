const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof (e)).toBe('object');
});
test('Can set name via constructor arguments', () => {
    const name = 'Summer';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});
test('Can set ID via constructor argument', () => {
    const testValue = 100;
    const e = new Employee('Emily', testValue);
    expect(e.ID).toBe(testValue);
});
test('Can set email via constructor argument', () => {
    const testValue = 'test@email.com';
    const e = new Employee('Emily', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Can get name via getName()', () => {
    const testValue = 'Summer';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});
test('Can get ID via getID()', () => {
    const testValue = 100;
    const e = new Employee('Emily', testValue);
    expect(e.getID()).toBe(testValue);
});
test('Can get email via getEmail()', () => {
    const testValue = 'test@email.com';
    const e = new Employee('Emily', 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
test('getRole() should return \'Employee\'',() => {
    const testValue = 'Employee';
    const e = new Employee('Emily', 1, 'test@email.com');
    expect(e.getRole()).toBe(testValue);
});
