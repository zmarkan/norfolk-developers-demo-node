# CircleCI sample integration - NodeJS (Norfolk Developers meetup - 19 November 2020)

The project is a NodeJS Express app written with TypeScript, deployed on Heroku.
The NodeJS building work and Heroku deployment are provided by CircleCI orbs.

## Requirements

- Free CircleCI account
- Free Heroku account, with 2 apps 
- Set up environment variables in your CircleCI project: 

- `HEROKU_API_KEY`
- `HEROKU_API_DEV_ENV` - your dev app/environment
- `HEROKU_API_PROD_ENV` - your production app/environment

## CircleCI workflow  

0. Check out `.circleci/config.yml` for the CircleCI config
1. Build & Test on every commit and pull request. Yes, it's a build, as it compiles TypeScript down to JavaScript. 
2. Deploy the app to development Heroku app
3. If it's a tagged release build, deploy to production Heroku app, asking for manual approval beforehand
