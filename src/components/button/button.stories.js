import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import button from './button.hbs';

// Data
const textButtonData = {
  text: 'Submit'
}

const largeButtonData = {
  text: 'Submit',
  modifierClass: 'cmp-button--large'
}

const secondaryButtonData = {
  text: 'Submit',
  modifierClass: 'cmp-button--secondary'
}


// Story Exports
export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      source: {
        code: button()
      }
    }
  }
};

export const Text = () => button(textButtonData);
Text.parameters = {
  docs: {
    source: {
      code: button(textButtonData)
    }
  }
}

export const Secondary = () => button(secondaryButtonData);
Secondary.parameters = {
  docs: {
    source: {
      code: button(secondaryButtonData)
    }
  }
}

export const Large = () => button(largeButtonData);
Large.parameters = {
  docs: {
    source: {
      code: button(largeButtonData)
    }
  }
}

