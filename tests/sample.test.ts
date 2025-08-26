// Basic tests to show testing knowledge
describe('Application Tests', () => {
  test('basic arithmetic works', () => {
    expect(1 + 1).toBe(2);
  });
  
  test('user data structure validation', () => {
    const user = { id: 1, name: 'John' };
    expect(user).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String)
    }));
  });
});