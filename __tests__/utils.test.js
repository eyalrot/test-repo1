const {
  formatGreeting,
  isValidName,
  formatUptime,
  getCurrentTimestamp
} = require('../src/utils');

describe('Utils - formatGreeting', () => {
  test('should return default greeting for null input', () => {
    expect(formatGreeting(null)).toBe('Hello, World!');
  });

  test('should return default greeting for undefined input', () => {
    expect(formatGreeting(undefined)).toBe('Hello, World!');
  });

  test('should return default greeting for empty string', () => {
    expect(formatGreeting('')).toBe('Hello, World!');
    expect(formatGreeting('   ')).toBe('Hello, World!');
  });

  test('should return default greeting for non-string input', () => {
    expect(formatGreeting(123)).toBe('Hello, World!');
    expect(formatGreeting({})).toBe('Hello, World!');
    expect(formatGreeting([])).toBe('Hello, World!');
  });

  test('should format greeting with proper capitalization', () => {
    expect(formatGreeting('john')).toBe('Hello, John!');
    expect(formatGreeting('JANE')).toBe('Hello, JANE!');
    expect(formatGreeting('alice')).toBe('Hello, Alice!');
  });

  test('should handle names with spaces', () => {
    expect(formatGreeting('john doe')).toBe('Hello, John doe!');
    expect(formatGreeting(' mary jane ')).toBe('Hello, Mary jane!');
  });
});

describe('Utils - isValidName', () => {
  test('should return false for invalid inputs', () => {
    expect(isValidName(null)).toBe(false);
    expect(isValidName(undefined)).toBe(false);
    expect(isValidName('')).toBe(false);
    expect(isValidName('   ')).toBe(false);
    expect(isValidName(123)).toBe(false);
    expect(isValidName({})).toBe(false);
  });

  test('should return true for valid names', () => {
    expect(isValidName('John')).toBe(true);
    expect(isValidName('Mary Jane')).toBe(true);
    expect(isValidName("O'Connor")).toBe(true);
    expect(isValidName('Anne-Marie')).toBe(true);
    expect(isValidName('a')).toBe(true);
  });

  test('should return false for names with invalid characters', () => {
    expect(isValidName('John123')).toBe(false);
    expect(isValidName('John@Doe')).toBe(false);
    expect(isValidName('John.Doe')).toBe(false);
    expect(isValidName('John_Doe')).toBe(false);
  });

  test('should return false for names that are too long', () => {
    const longName = 'a'.repeat(51);
    expect(isValidName(longName)).toBe(false);
  });

  test('should return true for names at the character limit', () => {
    const maxLengthName = 'a'.repeat(50);
    expect(isValidName(maxLengthName)).toBe(true);
  });
});

describe('Utils - formatUptime', () => {
  test('should handle invalid inputs', () => {
    expect(formatUptime(null)).toBe('0 seconds');
    expect(formatUptime(undefined)).toBe('0 seconds');
    expect(formatUptime('invalid')).toBe('0 seconds');
    expect(formatUptime(-1)).toBe('0 seconds');
  });

  test('should format seconds correctly', () => {
    expect(formatUptime(0)).toBe('0 seconds');
    expect(formatUptime(1)).toBe('1 second');
    expect(formatUptime(30)).toBe('30 seconds');
    expect(formatUptime(59)).toBe('59 seconds');
  });

  test('should format minutes correctly', () => {
    expect(formatUptime(60)).toBe('1 minute');
    expect(formatUptime(90)).toBe('1 minute, 30 seconds');
    expect(formatUptime(120)).toBe('2 minutes');
    expect(formatUptime(3599)).toBe('59 minutes, 59 seconds');
  });

  test('should format hours correctly', () => {
    expect(formatUptime(3600)).toBe('1 hour');
    expect(formatUptime(3661)).toBe('1 hour, 1 minute, 1 second');
    expect(formatUptime(7200)).toBe('2 hours');
    expect(formatUptime(86399)).toBe('23 hours, 59 minutes, 59 seconds');
  });

  test('should format days correctly', () => {
    expect(formatUptime(86400)).toBe('1 day');
    expect(formatUptime(90061)).toBe('1 day, 1 hour, 1 minute, 1 second');
    expect(formatUptime(172800)).toBe('2 days');
  });

  test('should handle complex combinations', () => {
    expect(formatUptime(90000)).toBe('1 day, 1 hour');
    expect(formatUptime(266461)).toBe('3 days, 2 hours, 1 minute, 1 second');
  });
});

describe('Utils - getCurrentTimestamp', () => {
  test('should return a valid ISO timestamp', () => {
    const timestamp = getCurrentTimestamp();
    expect(typeof timestamp).toBe('string');
    expect(new Date(timestamp).toISOString()).toBe(timestamp);
  });

  test('should return current time (within reasonable bounds)', () => {
    const before = new Date().getTime();
    const timestamp = getCurrentTimestamp();
    const after = new Date().getTime();
    const timestampTime = new Date(timestamp).getTime();
    
    expect(timestampTime).toBeGreaterThanOrEqual(before);
    expect(timestampTime).toBeLessThanOrEqual(after);
  });
});
