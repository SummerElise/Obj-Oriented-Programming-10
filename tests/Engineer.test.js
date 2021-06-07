const Engineer = require('../lib/Engineer');

test('Can set gitHub account via constructor', () => {
    const testValue = 'GithubUser';
    const e = new Engineer('Emily', 1, 'test@email.com', testValue);
    expect(e.gitHub).toBe(testValue);
});

test('getRole() should return \'Engineer\'', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Emily', 1, 'test@email.com', 'GithubUser');
});

test('Can get gitHub username vi getGitHub()', () => {
    const testValue = 'GithubUser';
    const e = new Engineer('Emily', 1, 'test@email.com', testValue);
    expect(e.getGitHub()).toBe(testValue);
});