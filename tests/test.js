const add = require('../math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// Passing Tests
test('1 + 1 equals 2', () => {
    expect(1 + 1).toBe(2);
  });
  
  test('Check if array contains a specific value', () => {
    const arr = [1, 2, 3];
    expect(arr.includes(2)).toBe(true);
  });
  
  test('Check if string starts with "Hello"', () => {
    const str = 'Hello, World!';
    expect(str.startsWith('Hello')).toBe(true);
  });
  
  test('Check if number is greater than 5', () => {
    const number = 10;
    expect(number).toBeGreaterThan(5);
  });
  
  // ... continue with 81 more passing tests ...
  
//   // Failing Tests
//   test('1 + 1 equals 3 (should fail)', () => {
//     expect(1 + 1).toBe(3);
//   });
  
//   test('Check if array contains a specific value (should fail)', () => {
//     const arr = [1, 2, 3];
//     expect(arr.includes(4)).toBe(true);
//   });
  
//   test('Check if string starts with "Hi" (should fail)', () => {
//     const str = 'Hello, World!';
//     expect(str.startsWith('Hi')).toBe(true);
//   });
  
//   test('Check if number is less than 5 (should fail)', () => {
//     const number = 10;
//     expect(number).toBeLessThan(5);
//   });
  
//   // ... continue with 11 more failing tests ...
  
  