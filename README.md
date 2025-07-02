# test-repo1

[![CI](https://github.com/YOUR_USERNAME/test-repo1/workflows/CI/badge.svg)](https://github.com/YOUR_USERNAME/test-repo1/actions)
[![codecov](https://codecov.io/gh/YOUR_USERNAME/test-repo1/branch/main/graph/badge.svg)](https://codecov.io/gh/YOUR_USERNAME/test-repo1)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

A demo Node.js project with Express.js API and GitHub Actions CI/CD.

## Features

- **Express.js API** with RESTful endpoints
- **Automated testing** with Jest and Supertest
- **Code quality tools** (ESLint, Prettier)
- **GitHub Actions CI/CD** pipeline
- **Multi-version Node.js testing** (18, 20, 22)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd test-repo1

# Install dependencies
npm install
```

### Running the Application

```bash
# Start the server
npm start

# Start in development mode (with auto-restart)
npm run dev
```

The API will be available at `http://localhost:3000`

### API Endpoints

- `GET /` - Welcome message with API info
- `GET /health` - Health check endpoint
- `GET /api/hello/:name?` - Greeting endpoint (name is optional)

### Development

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with verbose output
npm run test:verbose

# Run linting
npm run lint

# Format code
npm run format

# Check formatting without fixing
npm run format -- --check
```

## Testing

The project includes comprehensive testing with:

- **Unit Tests** - Individual function testing with Jest
- **Integration Tests** - API endpoint testing with Supertest
- **Test Coverage** - Coverage reports with Istanbul
- **Continuous Testing** - Automated testing in CI/CD pipeline

### Test Structure

- `__tests__/` - Unit tests for utility functions
- `index.test.js` - Integration tests for API endpoints
- `jest.config.js` - Jest configuration with coverage settings

### Running Tests

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory and include:
- HTML report: `coverage/lcov-report/index.html`
- LCOV format: `coverage/lcov.info`
- Text summary in terminal

## CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow that:

- **Tests** the application on Node.js versions 18, 20, and 22
- **Runs** ESLint for code quality
- **Executes** Jest tests with Supertest
- **Generates** test coverage reports
- **Uploads** coverage to Codecov
- **Checks** code formatting with Prettier
- **Performs** security scanning with npm audit and CodeQL
- **Verifies** application startup and health endpoints
- **Archives** test results and logs for debugging
- **Validates** markdown files
- **Checks** for broken links
- **Performs** spell checking

### Automated Testing Triggers

- **Every push** to main, master, or develop branches
- **Pull requests** targeting main, master, or develop branches
- **Daily scheduled runs** at 2 AM UTC for regression testing
- **Manual dispatch** for on-demand testing
- **Smart filtering** - skips CI for documentation-only changes

### Test Automation Features

- **Parallel execution** across multiple Node.js versions
- **Dependency caching** for faster build times
- **Coverage reporting** with Codecov integration
- **Security vulnerability scanning**
- **Application health verification**
- **Test artifact preservation** for 30 days

## Project Structure

```
test-repo1/
├── .github/workflows/ci.yml  # GitHub Actions workflow
├── __tests__/                # Unit tests directory
│   └── utils.test.js         # Utility function tests
├── src/                      # Source code directory
│   └── utils.js              # Utility functions
├── .eslintrc.js              # ESLint configuration
├── .gitignore                # Git ignore rules
├── .prettierrc               # Prettier configuration
├── jest.config.js            # Jest testing configuration
├── index.js                  # Main application file
├── index.test.js             # Integration tests
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## License

ISC
