# Front End Developer Technical Test - VocaGame

## Overview

This project is for the technical test from VocaGame. It implements session management using encrypted cookies for user authentication in a Next.js application. It includes features such as protecting routes, redirecting unauthenticated users to the login page, and handling session expiration.

## Implementation Choices

- **Session Management**: Encrypted cookies are used to store user sessions. Cookies are encrypted when being saved and decrypted when retrieved, ensuring the security of user data.
- **Authentication Middleware**: A middleware function is implemented to authenticate users. It protects routes that require authentication, redirecting unauthenticated users to the login page.

- **Login Page**: A login page is provided where users can authenticate. Upon successful login, the user session cookie is set.

- **Session Expiration Handling**: Logic is implemented to handle session expiration. Users are redirected to the login page if their session cookie expires.

## How to Run the Project

Follow these steps to run the project locally:

1. Clone the repository to your local machine:
   `git clone <repository-url>`

2. Install dependencies:
   `npm install or yarn add`

3. Start the development server:
   `npm run dev or yarn dev`

4. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Dependencies

- [js-cookie](https://www.npmjs.com/package/js-cookie): For managing cookies in the browser.
- [crypto-js](https://www.npmjs.com/package/crypto-js): For encryption and decryption of data.
- [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit): For state management global
- [react-hook-form](https://www.npmjs.com/package/@reduxjs/react-hook-form): for validation form input
- [react-redux](https://www.npmjs.com/package/@reduxjs/react-redux): for linked redux and react

## License

This project is licensed under the [MIT License](LICENSE).
