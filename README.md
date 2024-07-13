
# Unified Webpack Dev Tools

Simplify and enhance Webpack's development tools by unifying webpack-dev-server, webpack-hot-middleware, and webpack-dev-middleware into a more cohesive structure.


## Introduction

This project aims to streamline the development experience with Webpack by consolidating the existing development tools into a unified solution. By extracting hot module replacement (HMR) logic into a dedicated middleware package ( **webpack-hmr-middleware** ), we eliminate duplication and improve user experience. Additionally, we transform webpack-dev-server into a monorepo with three distinct packages: `webpack-dev-middleware`, `webpack-hmr-middleware`, and `webpack-dev-server`.

## Prerequisites

To contribute to this project, you should be familiar with JavaScript, Node.js, CSS, and HTML. Knowledge of Webpack and its ecosystem is also beneficial.

## Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

```bash
git clone https://github.com/Gupta-Kavya/webpack-hmr-middleware.git
```
2. **Install dependencies:**

```bash
cd path-to-folder
npm install

```

3. **Start the development server:**

```bash
npm start
```

## Deprecation of webpack-hot-middleware

With the introduction of webpack-hmr-middleware, we are deprecating webpack-hot-middleware. Users are encouraged to migrate to webpack-hmr-middleware for improved functionality and maintenance. Here's how you can transition smoothly:

### Migration Guide

1. **Install webpack-hmr-middleware:**

```bash
npm install webpack-hmr-middleware --save-dev

```

2. **Update webpack configuration:**

Modify your `webpack.config.js` to replace references to `webpack-hot-middleware` with `webpack-hmr-middleware`. Refer to the documentation for `webpack-hmr-middleware` for configuration options.

3. **Remove webpack-hot-middleware:**

```bash
npm uninstall webpack-hot-middleware --save-dev

```

Remove webpack-hot-middleware from your project dependencies and configuration files.

## Contribution Guidelines

We welcome contributions from the community! If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Ensure your code adheres to the project's coding standards.
- Write clear commit messages and documentation.
- Submit a pull request detailing your changes and explaining their purpose.

## License

This project is licensed under the **MIT License**

# Acknowledgments

Special thanks to **Dhruvdutt** and **Nitin** for their mentorship and guidance throughout the development process.
