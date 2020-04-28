# Wondersauce's Shopify Boilerplate

A fresh start for your new Shopify project.

Cururently based off "Debut" Shopify theme [https://themes.shopify.com/themes/debut/styles/default](https://themes.shopify.com/themes/debut/styles/default)

### Code repository

[https://github.com/Wondersauce/wondersauce-shopify-boilerplate](https://github.com/Wondersauce/wondersauce-shopify-boilerplate)

### Dependencies

- NodeJS: [https://nodejs.org/en/](https://nodejs.org/en/)
- Themekit: [https://shopify.github.io/themekit/](https://shopify.github.io/themekit/)

### Module bundling

This project usues ParcelJS as module bundler [https://parceljs.org/](https://parceljs.org/)

### Setup

- Duplicate the file `config.sample.yml` and call it `config.yml`. Add your different environment names with their different theme ids, store URL and password for the store. Please note that whatever names we choose for the environments will have to be consistent with the commands in the following section "Usage".
- Run `yarn install`

### Usage

- `yarn start`: Watches local changes and uploads theme to the `development` store (see config.yml). A new tab in your browser should start and reload automatically with each new change.
- `yarn deploy:development`: Uploads all files unminimized (JS, CSS) to the `development` store
- `yarn deploy:production`: Uploads all files minimized (JS, CSS) to the `production` store

(\*) Please note that these commands assumes there are 2 environments configured in the `config.yml`: `development` and `production`

### Code formatting

Prettier [https://prettier.io/](https://prettier.io/) has been set up in the project for consistent formatting across JS and CSS files. A pre-commit hook tied to Prettier runs to the local files are automatically "prettied" before pushing them to the repo.

### Folder structure

- /assets
- /config
- /layout
- /locales
- /sections
- /snippets
- /templates
- /src `//Custom JS/CSS`
  - /js
  - /styles
- browsersync-script.js `//Runs Browsersync on yarn start`
- config.sample.yml `//A sample file to configure theme kit`

### Development workflow

We recommend each developer to have its own theme on the store where they can develop and test their own changes.

Additionally, each store should have a `Develop` theme where changes from all developers in the project can be integrated and tested. This theme can be matched with a branch in the Git repo with the same name. Deploys to this branch should be done via CI (see section below).

The live theme on each store or `Production` theme should be matched with the `master` branch in the project. Like in the previous case, deploys to this branch should be done via CI (see section below).

Another alternartive to having different themes as environments in the same store is having different stores altogether. i.e. `mysuperstore-dev.myshopify.com` and `mysuperstore.myshopify.com`. We recommend avoid this alternative if possible as the need of having to constantly maintain the two store in sync tends to cripple the velocity of the developement team. Additionally it can be error prone, as the prouduct catalog, widgets, etc. rarely match one to one.

### Continuous Integration (CI)

We are currently using Github Actions [https://github.com/features/actions](https://github.com/features/actions) in order to consistently integrate and deploy the work of all developers in the project in safe and repeatable manner.

As mentioned in previous point, we recommend having two environments `Develop` and `Production`. Each one of these environments can be matched to a branch on Git (i.e. `develop` and `master`). Pushes to each one of these branches will triggger a deploy to the beforementioned environments.

For more details of the implementation please see files in `.github/workflows`

### Theme development approach

WIP

### Component catalog

WIP

### Trusted apps

WIP

### Shopify developer resources

###### Shopify Essentials

- Ultimate List of Theme Development Resources: [https://www.shopify.ca/partners/blog/the-ultimate-list-of-resources-for-shopify-theme-developers](https://www.shopify.ca/partners/blog/the-ultimate-list-of-resources-for-shopify-theme-developers)
- Shopify/Liquid Cheat Sheet: [https://www.shopify.com/partners/shopify-cheat-sheet](https://www.shopify.com/partners/shopify-cheat-sheet)
- Markdunkely Liquid Cheat Sheet: [https://cheat.markdunkley.com/](https://cheat.markdunkley.com/)
- Liquid Code Examples: [https://shopify.github.io/liquid-code-examples/](https://shopify.github.io/liquid-code-examples/)
- Shopify Sections architecture: [https://shopify.dev/docs/themes/sections](https://shopify.dev/docs/themes/sections)
- Development Workflow: [https://www.shopify.com/partners/blog/development-workflow](https://www.shopify.com/partners/blog/development-workflow)

###### Video Tutorials

- Basic: [Shopify Essentials for Web Developers (From Store Setup to Custom Themes)](https://www.skillshare.com/classes/Shopify-Essentials-for-Web-Developers-From-Store-Setup-to-Custom-Themes/1070001866?via=search-layout-grid)
- Advanced: [Advanced Shopify Theme Development](https://www.skillshare.com/classes/Advanced-Shopify-Theme-Development/708093439?via=search-layout-grid)
- Important: [How to Create Custom Theme Sections and Blocks](https://www.youtube.com/watch?v=0YQZgCSVdFs)

###### Online Courses

- [https://partner-training.shopify.com/catalog](https://partner-training.shopify.com/catalog)
  - Basic: Development Fundamentals
  - Advanced: Design and Theming Fundamentals
  - One step further: App Development Fundamentals

###### Other Useful Links

- Shopify App CLI: [https://www.shopify.ca/partners/blog/cli-tool](https://www.shopify.ca/partners/blog/cli-tool)

### General coding best practices

- Write clean, well documented, re-usable code. The kind of code you would like to see in a project if you joined the team!

###### CSS

- Mind [https://css-tricks.com/sass-style-guide/](https://css-tricks.com/sass-style-guide/) when writing Sass code (special attention at nestings depth -3 levels- and length -50 lines-)
- Use "BEM" for consistent CSS classname naming [http://getbem.com/introduction/](http://getbem.com/introduction/) (-- for state, \_\_ for sub elements)

###### JS

- Avoid non essential libraries (i.e. jQuery)
- AirBnb JS Styleguide is a good reference on how to write clean JS [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

###### Git and Jira

- Name your feature branches concatenating Jira project ID, Jira ticket number and normalized ticket title. i.e. GOLF-555-adding-footer
- New ticket = new branch = new PR
- Ship early, ship often. It's better do more frequent, smaller PRs than more intermitent, bigger ones
