# Alkhabir

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Development Server](#development-server)
- [Code Scaffolding](#code-scaffolding)
- [Build](#build)
- [Running Unit Tests](#running-unit-tests)
- [Running End-to-End Tests](#running-end-to-end-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Alkhabir is a comprehensive Angular application designed to provide a robust and scalable solution for various web development needs. This project includes multiple features and modules that cater to different aspects of a modern web application.

## Features

### Authentication
- **Login**: Secure login functionality with form validation.
- **Registration**: User registration with email verification.
- **Forgot Password**: Password recovery via email.

### Pages
- **Home**: A dynamic homepage with featured content and navigation.
- **About**: Information about the project and its purpose.
- **Blog**: A blog section with articles and posts.
- **Blog Details**: Detailed view of individual blog posts.
- **Contact**: A contact form for user inquiries.
- **Course Category**: Categories of courses offered.
- **Course Details**: Detailed information about individual courses.
- **Checkout**: A checkout process for purchasing courses.
- **Profile**: User profile management.

### Shared Components
- **Header**: Navigation header with links to various sections.
- **Footer**: Footer with additional links and information.
- **Sidebar**: Sidebar for easy navigation within the application.
- **Modals**: Reusable modal components for various interactions.

### Services
- **API Service**: Service for making HTTP requests to the backend.
- **Auth Service**: Service for handling authentication and user sessions.
- **Course Service**: Service for managing course-related data.

### Guards
- **Auth Guard**: Route guard to protect authenticated routes.
- **Course Guard**: Guard to ensure proper access to course-related routes.

### Utilities
- **Helpers**: Utility functions for common tasks.
- **Validators**: Custom form validators for enhanced form validation.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project Structure
```
Alkhabir/
├── .gitignore
├── angular.json
├── package.json
├── proxy.conf.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
├── src/
│   ├── app/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── course.guard.spec.ts
│   │   ├── course.guard.ts
│   │   ├── pages/
│   │   │   ├── about/
│   │   │   │   ├── about.component.html
│   │   │   │   ├── about.component.scss
│   │   │   │   ├── about.component.spec.ts
│   │   │   │   ├── about.component.ts
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   ├── login.component.html
│   │   │   │   │   ├── login.component.scss
│   │   │   │   │   ├── login.component.spec.ts
│   │   │   │   │   ├── login.component.ts
│   │   │   │   ├── register/
│   │   │   │   │   ├── register.component.html
│   │   │   │   │   ├── register.component.scss
│   │   │   │   │   ├── register.component.spec.ts
│   │   │   │   │   ├── register.component.ts
│   │   │   ├── blog/
│   │   │   │   ├── blog.component.html
│   │   │   │   ├── blog.component.scss
│   │   │   │   ├── blog.component.spec.ts
│   │   │   │   ├── blog.component.ts
│   │   │   ├── blog-details/
│   │   │   │   ├── blog-details.component.html
│   │   │   │   ├── blog-details.component.scss
│   │   │   │   ├── blog-details.component.spec.ts
│   │   │   │   ├── blog-details.component.ts
│   │   │   ├── checkout/
│   │   │   │   ├── checkout.component.html
│   │   │   │   ├── checkout.component.scss
│   │   │   │   ├── checkout.component.spec.ts
│   │   │   │   ├── checkout.component.ts
│   │   │   ├── contact/
│   │   │   │   ├── contact.component.html
│   │   │   │   ├── contact.component.scss
│   │   │   │   ├── contact.component.spec.ts
│   │   │   │   ├── contact.component.ts
│   │   │   ├── course-category/
│   │   │   │   ├── course-category.component.html
│   │   │   │   ├── course-category.component.scss
│   │   │   │   ├── course-category.component.spec.ts
│   │   │   │   ├── course-category.component.ts
│   │   │   ├── course-details/
│   │   │   │   ├── course-details.component.html
│   │   │   │   ├── course-details.component.scss
│   │   │   │   ├── course-details.component.spec.ts
│   │   │   │   ├── course-details.component.ts
│   │   │   ├── profile/
│   │   │   │   ├── profile.component.html
│   │   │   │   ├── profile.component.scss
│   │   │   │   ├── profile.component.spec.ts
│   │   │   │   ├── profile.component.ts
│   │   ├── shared/
│   │   │   ├── header/
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   ├── header.component.spec.ts
│   │   │   │   ├── header.component.ts
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   ├── footer.component.ts
│   │   │   ├── sidebar/
│   │   │   │   ├── sidebar.component.html
│   │   │   │   ├── sidebar.component.scss
│   │   │   │   ├── sidebar.component.spec.ts
│   │
```
## Contributing

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
