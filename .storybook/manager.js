import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'HTML Storybook Example',
    brandUrl: 'https://seesparkbox.com',
  }),
});
