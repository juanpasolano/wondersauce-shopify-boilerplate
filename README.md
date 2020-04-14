# Wondersauce's Shopify Boilerplate

A fresh start for your new Shopify project.

Cururently based off "Debut" Shopify theme `https://themes.shopify.com/themes/debut/styles/default`

### Code repository

`https://github.com/Wondersauce/wondersauce-shopify-boilerplate`

### Dependencies

- NodeJS: `https://nodejs.org/en/`
- Themekit: `https://shopify.github.io/themekit/`

### Module bundling

This project usues ParcelJS as module bundler `https://parceljs.org/`

### Setup

- Duplicate the file `config.sample.yml` and call it `config.yml`. Add your different environment names with their different theme ids, store URL and password for the store. Please note that whatever names we choose for the environments will have to be consistent with the commands in the following section "Usage".
- Run `yarn install`

### Usage

- `yarn start`: Watches local changes and uploads theme to the `development` store (see config.yml). A new tab in your browser should start and reload automatically with each new change.
- `yarn deploy:development`: Uploads all files unminimized (JS, CSS) to the `development` store
- `yarn deploy:production`: Uploads all files minimized (JS, CSS) to the `production` store

(\*) Please note that these commands assumes there are 2 environments configured in the `config.yml`: `development` and `production`

### Code formatting

Prettier (`https://prettier.io/`) has been set up in the project for consistent formatting across JS and CSS files. A pre-commit hook tied to Prettier runs to the local files are automatically "prettied" before pushing them to the repo.

### Folder structure

- /assets, /config, /layout, /locales, /sections, /snippets, /templates # Shopify theme files
- /src # Custom JS/CSS
  - /js
  - /styles
- browsersync-script.js # Runs Browsersync on `yarn start`
- config.sample.yml A sample file to configure theme kit

### Development workflow

We recommend each developer to have its own theme on the store where they can develop and test their own changes.

Additionally, each store should have a `Develop` theme where changes from all developers in the project can be integrated and tested. This theme can be matched with a branch in the Git repo with the same name. Deploys to this branch should be done via CI (see section below).

The live theme on each store or `Production` theme should be matched with the `master` branch in the project. Like in the previous case, deploys to this branch should be done via CI (see section below).

Another alternartive to having different themes as environments in the same store is having different stores altogether. i.e. `mysuperstore-dev.myshopify.com` and `mysuperstore.myshopify.com`. We recommend avoid this alternative if possible as the need of having to constantly maintain the two store in sync tends to cripple the velocity of the developement team. Additionally it can be error prone, as the prouduct catalog, widgets, etc. rarely match one to one.

### Continuous Integration (CI)

We are currently using Github Actions `https://github.com/features/actions` in order to consistently integrate and deploy the work of all developers in the project in safe and repeatable manner.

As mentioned in previous point, we recommend having two environments `Develop` and `Production`. Each one of these environments can be matched to a branch on Git (i.e. `develop` and `master`). Pushes to each one of these branches will triggger a deploy to the beforementioned environments.

For more details of the implementation please see files in `.github/workflows`

### Theme development approach

WIP

### Component catalog

WIP
