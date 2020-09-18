import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import list from './list.hbs';

const listData = {
  items: [
    'apples',
    'oranges',
    'peaches',
    'grapes'
  ]
};

export default {
  title: 'Components/List',
  parameters: {
    docs: {
      source: {
        code: list(listData)
      }
    }
  }
};

export const Main = () => list(listData);
