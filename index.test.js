const request = require('supertest');
const app = require('./index');

describe('API Integration Tests', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Welcome to the demo Node.js API!');
    expect(response.body).toHaveProperty('version', '1.0.0');
    expect(response.body).toHaveProperty('timestamp');
    expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
  });

  test('GET /health should return health status with formatted uptime', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('uptimeFormatted');
    expect(response.body).toHaveProperty('timestamp');
    expect(typeof response.body.uptime).toBe('number');
    expect(typeof response.body.uptimeFormatted).toBe('string');
    expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
  });

  test('GET /api/hello should return default greeting', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, World!');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('GET /api/hello/John should return personalized greeting', async () => {
    const response = await request(app).get('/api/hello/John');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, John!');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('GET /api/hello with valid name should capitalize correctly', async () => {
    const response = await request(app).get('/api/hello/jane');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, Jane!');
  });

  test('GET /api/hello with invalid name should return 400 error', async () => {
    const response = await request(app).get('/api/hello/John123');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toContain('Invalid name format');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('GET /api/hello with special characters in name should return 400 error', async () => {
    const response = await request(app).get('/api/hello/John@Doe');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  test('GET /api/hello with valid special characters should work', async () => {
    const response = await request(app).get('/api/hello/O%27Connor'); // O'Connor URL encoded
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, O'Connor!");
  });

  test('GET /nonexistent should return 404', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'Route not found');
    expect(response.body).toHaveProperty('path', '/nonexistent');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('All endpoints should return valid timestamps', async () => {
    const endpoints = ['/', '/health', '/api/hello/test'];
    
    for (const endpoint of endpoints) {
      const response = await request(app).get(endpoint);
      expect(response.body).toHaveProperty('timestamp');
      const timestamp = new Date(response.body.timestamp);
      expect(timestamp).toBeInstanceOf(Date);
      expect(timestamp.getTime()).not.toBeNaN();
    }
  });
});
