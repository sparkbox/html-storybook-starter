import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import navigation from './navigation.hbs';

const navData = {
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
  ]
};

export default {
  title: 'Components/Navigation',
  parameters: {
    docs: {
      source: {
        code: navigation(navData)
      }
    }
  }
};

export const Main = () => navigation(navData);


