import { capitalize, reverse  } from './function.js';

describe('capitalize', () => {
  test('capitalizes first letter of lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('works with already capitalized word', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('works with single letter', () => {
    expect(capitalize('a')).toBe('A');
  });
});



describe('reverse', () => {
  test('reverses a string', () => {
    expect(reverse('hello')).toBe('olleh');
  });
});