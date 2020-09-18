# Storybook HTML Example

An experiment using Storybook to build an html-only (framework agnostic) design-system thing.

## Setup

1. Pull the branch down
2. Run `npm ci` to install dependencies
3. Run `npm run storybook` to run the local server

## How I created this project:

1. Use the storybook-cli init command: `npx -p @storybook/cli sb init --type html` (see [1b4281c](https://github.com/sparkbox/storybook-html-example/commit/1b4281cd206384e040d1b329c88cf2480c43aef5)).
2. Setup github actions to deploy the site to github pages (see [dc99700](https://github.com/sparkbox/storybook-html-example/commit/dc99700e64d36eec4244b011abe42011abf82c9e)).
3. Add an [ITCSS BEM setup](https://github.com/sparkbox/standard/tree/master/code-style/scss#how-itcss-works-with-bem), similar to the one in the [design-system starter](https://github.com/sparkbox/design-system-starter) (see [7cee599](https://github.com/sparkbox/storybook-html-example/commit/7cee5993d37ff77757a989d4928d11396fe3050f)).
4. Add a basic 'theme' for UI customization (see [f876d17](https://github.com/sparkbox/storybook-html-example/commit/)).
5. Integrate Handlebars, and create some components (see [62c2b44](https://github.com/sparkbox/storybook-html-example/commit/62c2b44b7aeac0ea9579a06115294e12ed053ec8)).
6. Create a page (Home) that uses our components (see [2ccd69e](https://github.com/sparkbox/storybook-html-example/commit/2ccd69e7809cac235b23395058a41fc0363b030a)).

Those steps were enough to build a basic foundation. Further explorations could include:

- Integrating some popular storybook addons (like [A11y](https://github.com/storybookjs/storybook/tree/next/addons/a11y), [Viewport](https://storybook.js.org/docs/html/essentials/viewport), and [Controls](https://storybook.js.org/docs/html/essentials/controls)).
- Heavier theming for the UI.
- Adding support for Handlebars helpers.
- Using a different template language (Twig, ejs, etc.)
- _...what else?_

For an example of a more detailed HTML implementation, see Cloud Four’s HTML Storybook [demo](https://v-next--cloudfour-patterns.netlify.app/) and [source](https://github.com/cloudfour/cloudfour.com-patterns) and [instructions](https://github.com/cloudfour/cloudfour.com-patterns/blob/v-next/CONTRIBUTING.md).
