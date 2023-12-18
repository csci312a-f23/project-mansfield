# Mansfield Bets

![workflow status](https://github.com/csci312a-f23/project-mansfield/actions/workflows/node.js.yml/badge.svg)

## Application

This application should allow the user to place and track sports wagers. Each user will have an account that tracks their balance and history across site visits.

## Application link

https://mansfield.csci312.dev

## Necessary deployment steps

The biggest consideration with deployment is the secrets.
There is `NEXTAUTH_SECRET` which NextAuth uses for token encryption (this token is you can generate yourself). For the depolyment you must set `NEXTAUTH_URL`.

There are also the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` for use with the GoogleProvider. These can be found [here](https://console.cloud.google.com/apis/credentials).

There is also `FIREBASE_KEY` which used in the Firebase config. This key can be found in the same place as the other Google secrets.

Lastly we have `REACT_APP_ODDS_API_KEY` for use with the [odds-api](https://the-odds-api.com/).

To run the locally, all of these except for NEXTAUTH_URL need to be set in the top level .env.local file.

All of these need to be pushed to the secrets of the deployment repository as well. This can be done like this in the case of the `NEXTAUTH_URL`:

```
ssh git@csci312.dev secrets mansfield NEXTAUTH_URL=https://mansfield.csci312.dev
```
