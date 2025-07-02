# GitHub Copilot Instructions

This document provides context and guidelines for GitHub Copilot when working on this Node.js demo project.

## Project Overview

This is a **demo Node.js project** featuring:
- Express.js REST API with multiple endpoints
- Comprehensive testing with Jest and Supertest
- Utility functions for common operations
- GitHub Actions CI/CD pipeline
- Code quality tools (ESLint, Prettier)

## Project Structure

```
test-repo1/
├── .github/workflows/ci.yml  # GitHub Actions CI/CD
├── __tests__/                # Unit tests
│   └── utils.test.js         # Utility function tests
├── src/                      # Source code
│   └── utils.js              # Utility functions
├── index.js                  # Main Express application
├── index.test.js             # Integration tests
├── jest.config.js            # Jest configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Documentation
```

## Code Style Guidelines

### JavaScript Style
- Use **ES6+ features** where appropriate
- Follow **ESLint rules** defined in `.eslintrc.js`
- Use **single quotes** for strings
- Use **2-space indentation**
- Include **semicolons**
- Use **const/let** instead of var

### Function Naming
- Use **camelCase** for functions and variables
- Use **descriptive names** that explain purpose
- Prefix boolean functions with `is`, `has`, `can`, `should`

### Error Handling
- Always include proper **error handling**
- Return appropriate **HTTP status codes**
- Include **timestamps** in all API responses
- Use **consistent error message format**

## API Conventions

### Response Format
All API responses should include:
```javascript
{
  // Response data
  "timestamp": "2025-07-02T10:30:00.000Z"
}
```

### Error Responses
```javascript
{
  "error": "Descriptive error message",
  "timestamp": "2025-07-02T10:30:00.000Z"
}
```

### Route Structure
- Use **RESTful conventions**
- Prefix API routes with `/api/`
- Include **parameter validation**
- Use appropriate **HTTP methods**

## Testing Guidelines

### Unit Tests
- Place in `__tests__/` directory
- Test **edge cases** and **error conditions**
- Use **descriptive test names**
- Follow **AAA pattern** (Arrange, Act, Assert)
- Aim for **high code coverage**

### Integration Tests
- Test **complete request/response cycles**
- Verify **HTTP status codes**
- Check **response structure**
- Test **error scenarios**

### Test Structure Example
```javascript
describe('Feature Name', () => {
  test('should do something specific', async () => {
    // Arrange
    const input = 'test data';
    
    // Act
    const result = await functionUnderTest(input);
    
    // Assert
    expect(result).toBe('expected output');
  });
});
```

## Utility Functions

### Location
- Place utility functions in `src/utils.js`
- Export as named exports
- Include JSDoc comments

### Implementation Guidelines
- **Pure functions** when possible
- **Input validation** for all parameters
- **Consistent return types**
- **Error handling** for invalid inputs

### Example Pattern
```javascript
/**
 * Description of what the function does
 * @param {string} input - Description of parameter
 * @returns {string} Description of return value
 */
function utilityFunction(input) {
  if (!input || typeof input !== 'string') {
    return 'default value';
  }
  
  // Function logic here
  return processedInput;
}
```

## Dependencies

### Production Dependencies
- `express` - Web framework
- Add new dependencies thoughtfully

### Development Dependencies
- `jest` - Testing framework
- `supertest` - HTTP testing
- `eslint` - Code linting
- `prettier` - Code formatting

## GitHub Actions

### CI Pipeline
The project includes comprehensive automated testing that runs:

#### Triggers
- **On every push** to main, master, or develop branches
- **On pull requests** targeting main, master, or develop branches  
- **Daily scheduled runs** at 2 AM UTC for regression testing
- **Manual workflow dispatch** for on-demand testing
- **Path filtering** - skips runs for documentation-only changes

#### Automated Testing Jobs
- **Multi-version testing** (Node.js 18, 20, 22) with matrix strategy
- **Dependency caching** for faster build times
- **Code quality checks** (ESLint)
- **Code formatting validation** (Prettier)
- **Test execution** with Jest and Supertest
- **Coverage reporting** with Codecov integration
- **Security scanning** with npm audit and CodeQL
- **Build verification** with application startup testing
- **Test artifact archival** for debugging and analysis

#### Test Automation Features
- **Parallel job execution** for faster feedback
- **Coverage reports** uploaded to Codecov (Node.js 20 only)
- **Test result artifacts** saved for 30 days
- **Security vulnerability scanning** with npm audit
- **Static code analysis** with GitHub CodeQL
- **Application health verification** via HTTP endpoint testing

### When Adding Features
- Tests **automatically run** on every push and PR
- Ensure **tests pass** locally before committing
- Add **appropriate tests** for new functionality
- Update **documentation** as needed
- Follow **commit message conventions**
- **Security scans** will identify vulnerabilities automatically

## Common Patterns

### Express Route Handler
```javascript
app.get('/api/endpoint/:param?', (req, res) => {
  try {
    const param = req.params.param;
    
    // Validation
    if (param && !isValid(param)) {
      return res.status(400).json({
        error: 'Validation error message',
        timestamp: getCurrentTimestamp()
      });
    }
    
    // Business logic
    const result = processRequest(param);
    
    // Success response
    res.json({
      data: result,
      timestamp: getCurrentTimestamp()
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
      timestamp: getCurrentTimestamp()
    });
  }
});
```

### Utility Function Pattern
```javascript
function processData(input) {
  // Input validation
  if (!input || typeof input !== 'expected_type') {
    return defaultValue;
  }
  
  // Processing logic
  const processed = transform(input);
  
  return processed;
}
```

## Documentation

### Code Comments
- Use **JSDoc** for function documentation
- Include **parameter types** and descriptions
- Document **return values**
- Explain **complex logic**

### README Updates
- Keep **API documentation** current
- Update **installation instructions**
- Document **new features**
- Include **usage examples**

## Best Practices

### Security
- **Validate all inputs**
- **Sanitize user data**
- Use **environment variables** for configuration
- Avoid **exposing sensitive information**

### Performance
- Use **efficient algorithms**
- Minimize **unnecessary operations**
- Consider **async/await** for I/O operations
- **Cache** expensive computations when appropriate

### Maintainability
- Keep functions **small and focused**
- Use **meaningful variable names**
- **Separate concerns** appropriately
- Write **self-documenting code**

## File Naming

- Use **kebab-case** for files: `my-feature.js`
- Use **camelCase** for JavaScript variables/functions
- Use **PascalCase** for classes
- Test files: `feature-name.test.js`

## When Making Changes

1. **Read existing code** to understand patterns
2. **Follow established conventions**
3. **Add appropriate tests**
4. **Update documentation**
5. **Run tests locally** before committing
6. **Check code formatting** with Prettier
7. **Ensure ESLint passes**

## GitHub Copilot Specific

When suggesting code:
- **Follow project patterns** established in existing files
- **Include proper error handling**
- **Add JSDoc comments** for new functions
- **Suggest corresponding tests** for new features
- **Consider edge cases** and validation
- **Use project utilities** (from `src/utils.js`) when appropriate
- **Maintain consistency** with existing API response formats

This project emphasizes **code quality**, **comprehensive testing**, and **maintainable architecture**. Please suggest solutions that align with these principles.
