# Project Skeleton

![workflow status](https://github.com/csci312a-f23/project-mansfield/actions/workflows/node.js.yml/badge.svg)

## Application

This application should allow the user to place and track sports wagers. Each user will have an account that tracks their balance and history across site visits.

## Application link

https://mansfield.csci312.dev

## Creation

This project skeleton has been setup similar to our assignments and practicals. It is a Next.JS application, created with create-next-app `💻 npx create-next-app@latest`, which uses Jest and Testing Library for testing, ESLint for static analysis, Prettier for styling, and is configured to use GitHub actions for testing pull requests.

Development dependencies installed with:

```
💻 npm install -D jest jest-environment-jsdom husky lint-staged prettier eslint-config-prettier @testing-library/react @testing-library/jest-dom
💻 npx install-peerdeps --dev eslint-config-airbnb
💻 npm install -D eslint-import-resolver-alias
```

Other dependencies installed with:

```
💻 npm install -S prop-types
```

## Necessary deployment steps

The biggest consideration with deployment is the secrets:
There is `NEXTAUTH_SECRET` which NextAuth uses for token encryption (this token is you can generate yourself). For the depolyment you must set `NEXTAUTH_URL`.

There are also the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` for use with the GoogleProvider. These can be found [here](https://console.cloud.google.com/apis/credentials).

There is also `FIREBASE_KEY` which used in the Firebase config. This key can be found in the same place as the other Google secrets.

Lastly we have `REACT_APP_ODDS_API_KEY` for use with the [odds-api](https://the-odds-api.com/).

To run the locally, all of these except for NEXTAUTH_URL need to be set in the top level .env.local file.

All of these need to be pushed to the secrets of the deployment repository as well. This can be done like this in the case of the `NEXTAUTH_URL`:

```
ssh git@csci312.dev secrets mansfield NEXTAUTH_URL=https://mansfield.csci312.dev
```

### Additional tools you might need

#### Mocking fetch

Tools for mocking fetch can be installed with

```
💻 npm install -D fetch-mock-jest node-fetch@2.6.7
```

Note we need to pin the `node-fetch` version due to breaking changes when used with Jest in newer versions.
