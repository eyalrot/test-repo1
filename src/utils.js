/**
 * Utility functions for the application
 */

/**
 * Formats a greeting message
 * @param {string} name - The name to greet
 * @returns {string} The formatted greeting
 */
function formatGreeting(name) {
  if (!name || typeof name !== 'string') {
    return 'Hello, World!';
  }
  
  const trimmedName = name.trim();
  if (trimmedName === '') {
    return 'Hello, World!';
  }
  
  // Capitalize first letter
  const capitalizedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
  return `Hello, ${capitalizedName}!`;
}

/**
 * Validates if a string is a valid name
 * @param {string} name - The name to validate
 * @returns {boolean} True if valid, false otherwise
 */
function isValidName(name) {
  if (!name || typeof name !== 'string') {
    return false;
  }
  
  const trimmedName = name.trim();
  if (trimmedName === '') {
    return false;
  }
  
  // Check if name contains only letters, spaces, hyphens, and apostrophes
  const namePattern = /^[a-zA-Z\s\-']+$/;
  return namePattern.test(trimmedName) && trimmedName.length <= 50;
}

/**
 * Calculates uptime in a human-readable format
 * @param {number} uptimeSeconds - Uptime in seconds
 * @returns {string} Formatted uptime string
 */
function formatUptime(uptimeSeconds) {
  if (typeof uptimeSeconds !== 'number' || uptimeSeconds < 0) {
    return '0 seconds';
  }
  
  const days = Math.floor(uptimeSeconds / 86400);
  const hours = Math.floor((uptimeSeconds % 86400) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  
  const parts = [];
  if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
  if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);
  
  return parts.join(', ');
}

/**
 * Generates a timestamp in ISO format
 * @returns {string} ISO timestamp
 */
function getCurrentTimestamp() {
  return new Date().toISOString();
}

module.exports = {
  formatGreeting,
  isValidName,
  formatUptime,
  getCurrentTimestamp
};
