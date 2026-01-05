# Contributing to Custard App

First off, thank you for considering contributing to Custard App! It's people like you that make building great software possible.

The following is a set of guidelines for contributing to Custard App, which is hosted in the [Custard-Technology Organization](https://github.com/Custard-Technology). These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Custard App. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps to reproduce the problem** in as many details as possible.
- **Provide specific examples** to demonstrate the steps.
- **Describe the behavior you observed** after following the steps and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Custard App, including completely new features and minor improvements to existing functionality.

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples** to demonstrate the steps.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.

### Pull Requests

The process described here has several goals:

- Maintain the quality of our code.
- Fix problems that are important to users.
- Engage the community in working toward the best possible product.

Please follow these steps to have your contribution considered by the maintainers:

1.  **Fork the repository** and create your branch from `main`.
2.  **Clone the repository** to your local machine.
3.  **Install dependencies** in both `contract` and `frontend` directories as needed.
4.  If you've added code that should be tested, **add tests**.
5.  If you've changed APIs, update the documentation.
6.  Ensure the test suite passes.
7.  Make sure your code follows the existing style patterns.
8.  **Issue that Pull Request!**

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.

### Coding Guidelines

We have specific styling guidelines for the frontend and smart contracts. Please refer to [STYLING_GUIDELINE.md](./STYLING_GUIDELINE.md) for detailed information on:

- Directory Structure
- Naming Conventions
- React/Next.js Patterns
- Solidity Best Practices

## specific Setup for Contributors

Refer to the [README.md](./README.md) for detailed setup instructions.

### Smart Contracts
When working on `contract/`:
- Ensure you compile and run tests before pushing.
- Do not commit your `.env` file containing private keys.

### Frontend
When working on `frontend/`:
- Ensure linting passes: `npm run lint`.
- Verify that the build succeeds: `npm run build`.

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
