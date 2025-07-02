# test-repo1

[![CI](https://github.com/eyalrot/test-repo1/workflows/CI/badge.svg)](https://github.com/eyalrot/test-repo1/actions)
[![codecov](https://codecov.io/gh/eyalrot/test-repo1/branch/main/graph/badge.svg)](https://codecov.io/gh/eyalrot/test-repo1)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A comprehensive Node.js demo project featuring Express.js REST API, extensive testing suite, and automated CI/CD pipeline with GitHub Actions.

## 🚀 Features

- **🌐 Express.js REST API** with multiple endpoints and input validation
- **🧪 Comprehensive Testing** with Jest and Supertest (29 tests total)
- **🔧 Code Quality Tools** (ESLint, Prettier, Jest)
- **⚙️ GitHub Actions CI/CD** with multi-version Node.js testing
- **🛡️ Security Scanning** with npm audit and CodeQL
- **📊 Test Coverage** reporting with Codecov integration
- **🤖 GitHub Copilot** instructions for consistent development

## 📁 Project Structure

```
test-repo1/
├── .github/
│   ├── workflows/ci.yml          # GitHub Actions CI/CD pipeline
│   └── copilot-instructions.md   # GitHub Copilot development guidelines
├── __tests__/
│   └── utils.test.js             # Unit tests (19 tests)
├── src/
│   └── utils.js                  # Utility functions with JSDoc
├── .eslintrc.js                  # ESLint configuration
├── .gitignore                    # Git ignore patterns
├── .prettierrc                   # Prettier formatting rules
├── jest.config.js                # Jest testing configuration
├── index.js                      # Main Express application
├── index.test.js                 # Integration tests (10 tests)
├── package.json                  # Dependencies and scripts
└── README.md                     # This documentation
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/eyalrot/test-repo1.git
cd test-repo1

# Install dependencies
npm install
```

### 🏃‍♂️ Running the Application

```bash
# Start the server
npm start

# Start in development mode (with auto-restart)
npm run dev
```

The API will be available at `http://localhost:3000`

### 🎯 API Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| `GET` | `/` | Welcome message with API info | JSON with version and timestamp |
| `GET` | `/health` | Health check with uptime | JSON with status and formatted uptime |
| `GET` | `/api/hello/:name?` | Personalized greeting | JSON with greeting message |

#### Example Requests

```bash
# Welcome endpoint
curl http://localhost:3000/

# Health check
curl http://localhost:3000/health

# Default greeting
curl http://localhost:3000/api/hello

# Personalized greeting
curl http://localhost:3000/api/hello/John

# Invalid name (returns 400)
curl http://localhost:3000/api/hello/John123
```

### 🛠️ Development

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with verbose output
npm run test:verbose

# Run ESLint for code quality
npm run lint

# Format code with Prettier
npm run format

# Check code formatting without fixing
npm run format -- --check
```

## 🧪 Testing

The project includes comprehensive testing with **29 total tests**:

### Test Categories

| Test Type | Location | Count | Description |
|-----------|----------|-------|-------------|
| **Unit Tests** | `__tests__/utils.test.js` | 19 | Utility function testing with edge cases |
| **Integration Tests** | `index.test.js` | 10 | API endpoint testing with Supertest |

### Test Coverage Areas

- ✅ **Input Validation** - Edge cases, null/undefined handling
- ✅ **Error Handling** - Invalid inputs, boundary conditions  
- ✅ **Business Logic** - Core functionality verification
- ✅ **API Endpoints** - HTTP status codes, response formats
- ✅ **Integration** - End-to-end request/response testing

### Running Tests

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

**Coverage reports** are generated in the `coverage/` directory:
- HTML report: `coverage/lcov-report/index.html`
- LCOV format: `coverage/lcov.info`
- Terminal summary included

## ⚙️ CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow that automatically:

### 🔄 Automated Testing Jobs

- **🧪 Multi-version Testing** - Node.js 18, 20, and 22 with matrix strategy
- **🔍 Code Quality Checks** - ESLint for code standards
- **🎨 Code Formatting** - Prettier validation
- **📊 Test Coverage** - Jest with Supertest, coverage reports
- **🛡️ Security Scanning** - npm audit and GitHub CodeQL
- **🏗️ Build Verification** - Application startup and health checks
- **📁 Test Artifacts** - Results archived for 30 days
- **📝 Documentation** - Markdown linting and link checking
- **✍️ Spell Checking** - Content validation

### 🚀 Automated Triggers

- **✅ Every push** to main, master, or develop branches
- **✅ Pull requests** targeting main, master, or develop branches
- **✅ Daily scheduled runs** at 2 AM UTC for regression testing
- **✅ Manual dispatch** for on-demand testing
- **✅ Smart filtering** - skips CI for documentation-only changes

### 🎯 Test Automation Features

- **⚡ Parallel execution** across multiple Node.js versions
- **🗂️ Dependency caching** for faster build times
- **📈 Coverage reporting** with Codecov integration
- **🔒 Security vulnerability scanning**
- **🩺 Application health verification**
- **📦 Test artifact preservation** for debugging

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing **code style** (ESLint + Prettier)
- Write **comprehensive tests** for new features
- Update **documentation** as needed
- Ensure all **CI checks pass**

## 🔧 Built With

- **[Node.js](https://nodejs.org/)** - JavaScript runtime
- **[Express.js](https://expressjs.com/)** - Web application framework
- **[Jest](https://jestjs.io/)** - Testing framework
- **[Supertest](https://github.com/visionmedia/supertest)** - HTTP testing
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Express.js team** for the excellent web framework
- **Jest community** for the comprehensive testing tools
- **GitHub Actions** for seamless CI/CD integration
- **Open source community** for inspiration and best practices

---

**Made with ❤️ by [eyalrot](https://github.com/eyalrot)**

*This project demonstrates modern Node.js development practices with comprehensive testing and automation.*
