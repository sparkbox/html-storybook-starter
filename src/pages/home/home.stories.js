import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import home from './home.hbs';

const pageData = {
  navItems: [
    {
      text: 'Products',
      href: '#products'
    },
    {
      text: 'Services',
      href: '#services'
    },
    {
      text: 'Blog',
      href: '#blog'
    },
    {
      text: 'About',
      href: '#about'
    }
  ],
  listItems: [
    'Apples',
    'Bananas',
    'Coconuts',
    'Grapes'
  ],
  ctaText: 'Learn More'
};

export default {
  title: 'Pages/Home',
  parameters: {
    docs: {
      source: {
        code: home(pageData)
      }
    }
  }
};

export const homePage = () => home(pageData);
