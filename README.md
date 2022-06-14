# qe-interview-task
Interview task for an QE position

<div align="center">
  <h1>Functional Tests</h1>
  <p>Tests run in the browser powered by <a href="https://www.cypress.io/	">cypress</a>
  </p>
</div>

## Setup

##### Requirements:

- [Node.js](https://nodejs.org) version >= 4.0.0
- [yarn](https://yarnpkg.com) version >= 1.0.0
- Operating System
  - macOS 10.9 and above (64-bit only)
  - Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
  - Windows 7 and above

##### Clone the repository:

```sh
$ git@github.com:krasimiryanchev-taulia/qe-interview-task.git
```

##### Install dependencies:

```sh
$ yarn
```

##### Run the app:

```sh
$ yarn start
```
You can now view qe-interview-task in the browser: http://localhost:3000

##### Run the cypress tests in headerlessly:

```sh
$ yarn cy:run
```

##### Run the cypress tests in browser:

```sh
$ yarn cy:open
```

##### Run the cypress tests with different env files (i.e. integration, pde, local):

```sh
$ yarn cy:run --env configFile=<env file name>

$ yarn cy:open --env configFile=integration

```

## Technologies

- [@testing-library/cypress](https://github.com/testing-library/cypress-testing-library) - Custom cypress commands
- [cypress](https://github.com/cypress-io/cypress) - e2e browser testing suite
- [eslint](https://eslint.org/) - JS linter
- [faker](https://github.com/Marak/Faker.js) - Fake data generator
- [prettier](https://github.com/prettier/prettier) - Code formatter
