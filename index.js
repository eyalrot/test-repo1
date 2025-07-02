const express = require('express');
const { formatGreeting, isValidName, formatUptime, getCurrentTimestamp } = require('./src/utils');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the demo Node.js API!',
    version: '1.0.0',
    timestamp: getCurrentTimestamp()
  });
});

app.get('/health', (req, res) => {
  const uptimeSeconds = process.uptime();
  res.json({
    status: 'healthy',
    uptime: uptimeSeconds,
    uptimeFormatted: formatUptime(uptimeSeconds),
    timestamp: getCurrentTimestamp()
  });
});

app.get('/api/hello/:name?', (req, res) => {
  const name = req.params.name;
  
  if (name && !isValidName(name)) {
    return res.status(400).json({
      error: 'Invalid name format. Names should contain only letters, spaces, hyphens, and apostrophes.',
      timestamp: getCurrentTimestamp()
    });
  }
  
  res.json({
    message: formatGreeting(name),
    timestamp: getCurrentTimestamp()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    timestamp: getCurrentTimestamp()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
    timestamp: getCurrentTimestamp()
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Visit http://localhost:${port} to see the API`);
});

module.exports = app;
