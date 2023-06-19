// Basic assertions
test('toBe: check for equality', () => {
    expect(2 + 2).toBe(4);
  });
  
  test('toEqual: deep equality check for objects', () => {
    const obj1 = { name: 'John' };
    const obj2 = { name: 'John' };
    expect(obj1).toEqual(obj2);
  });
  
  // Truthiness
  test('toBeTruthy: check if value is truthy', () => {
    expect(true).toBeTruthy();
  });
  
  test('toBeFalsy: check if value is falsy', () => {
    expect(false).toBeFalsy();
  });
  
  // Numbers
  test('toBeGreaterThan: check if a number is greater', () => {
    expect(10).toBeGreaterThan(5);
  });
  
  test('toBeLessThan: check if a number is less', () => {
    expect(3).toBeLessThan(5);
  });
  
  // Strings
  test('toMatch: check if a string matches a pattern', () => {
    const str = 'Hello, World!';
    expect(str).toMatch(/Hello/);
  });
  
  // Arrays and Iterables
  test('toContain: check if an array contains a specific value', () => {
    const arr = [1, 2, 3];
    expect(arr).toContain(2);
  });
  
  // Exceptions
  test('toThrow: check if a function throws an error', () => {
    const throwError = () => {
      throw new Error('Something went wrong');
    };
    expect(throwError).toThrow();
  });
  
  // Asynchronous code
  test('Async function with Promises', async () => {
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve('Data'), 1000);
      });
    };
  
    const data = await fetchData();
    expect(data).toBe('Data');
  });
  
  // Mock functions
  test('Mock function with assertions', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const result = mockFn(2, 3);
  
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(2, 3);
    expect(result).toBe(5);
  });
  
  // Test setup and teardown
  beforeEach(() => {
    // Setup code
  });
  
  afterEach(() => {
    // Teardown code
  });
  
  beforeAll(() => {
    // Setup code (once)
  });
  
  afterAll(() => {
    // Teardown code (once)
  });
  