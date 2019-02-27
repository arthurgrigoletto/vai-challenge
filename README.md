# Vai Frontend UI Challenge

## Overview

For this test I built a Proof Of Concept application with the technologies like React and Redux. The app is going to fetch data from [Random User](randomuser.com).

Is a human resources manager for a small bussiness that only employs Lego people. As part of the onboarding process, the company wants to ask all new Lego employees to create a company profile with their basic information so that can have easy access to employee data and monitor the company's human resources from an HR dashboard. Some examples of how she will use these profiles in the future are: know when it's someone's birthday, see everyone's role in the company and what department they belong to, take notes on performance reviews, etc). Although it will take some time to build all of this functionality, for the MVP, has asked for the basics. (Ability to create, view, and edit user profiles).

I decide to use React because I think it is the best way to managing components and make the code more short and simple. To make it more scaleable I decided to use Redux with redux-thunk middleware because it gives me dispatch on hands and I can handle my states with actions and reducers, and I don`t have to pass a lot of states between my components.

If I have more time, I probably think about how I can write better my code and change the way I code the `edit an user` freature. I'll study more tests, and try to write my components tests.

## Getting Started

In the directory of your choice, run:

```bash
git clone https://github.com/arthurgrigoletto/vai-challenge
```

This command will clone the project locally.

In the project directory, run:

```bash
  yarn

  or

  npm install
```

This command will install all dependencies will be need to run the project

## Login

In the [documentation](https://randomuser.me/documentation#seeds) we can see an endpoint that allways provide us the same user and this make possible to have this login freature.

You can login with the user bellow:

```json
  username: 'blueelephant921'
  password: 'ccccccc'
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Routes

| Endpoint    | Description                  | Access  |
| ----------- | ---------------------------- | ------- |
| `/`         | Dashboard with list of users | Private |
| `/:id`      | User's Detail Page           | Private |
| `/:id/edit` | User's Edit Page             | Private |
| `/login`    | Login Page                   | Public  |

## Built With

- [Yarn](https://yarnpkg.com/pt-BR/) - Package manager
- [ESLint](https://eslint.org/) - Provide a pluggable linting utility for JavaScript.
- [axios](https://github.com/axios/axios) - Managing Http requests
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Library that helps encoding JWTs token
- [jwt-decode](https://www.npmjs.com/package/jwt-decode) - Library that helps decoding JWTs token
- [prop-types](https://www.npmjs.com/package/prop-types) - Use prop-types to document the intended types of properties passed to components
- [react](https://reactjs.org/) - A JavaScript library for building user interfaces
- [react-router-dom](https://reacttraining.com/react-router/) - Managing routes in React
- [react-redux](https://react-redux.js.org/) - Official React bindings for Redux
- [redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [redux-thunk](https://github.com/reduxjs/redux-thunk) - Managing async behavior in Redux
- [Jest](https://jestjs.io/) - Testing Framework
