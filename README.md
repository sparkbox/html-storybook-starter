# Storybook HTML Example

An experiment using Storybook to build an html-only (framework agnostic) design-system thing.

## Setup

1. Pull the branch down
2. Run `npm ci` to install dependencies
3. Run `npm run storybook` to run the local server

## How I created this project:

1. Use the storybook-cli init command: `npx -p @storybook/cli sb init --type html`
2. Add an [ITCSS BEM setup](https://github.com/sparkbox/standard/tree/master/code-style/scss#how-itcss-works-with-bem), similar to the one in the [design-system starter](https://github.com/sparkbox/design-system-starter).
3. Create some components:
    - Navigation
    - Hero image (different per page)
    - Page title
    - Teaser card
4. Create some pages using the components
    - Home
    - About
    - Article
5. ...tbd.

For a more detailed example implementation, see Cloud Four’s HTML Storybook [demo](https://v-next--cloudfour-patterns.netlify.app/) and [source](https://github.com/cloudfour/cloudfour.com-patterns) and [instructions](https://github.com/cloudfour/cloudfour.com-patterns/blob/v-next/CONTRIBUTING.md).
