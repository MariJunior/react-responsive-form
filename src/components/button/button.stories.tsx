import { Meta, Story } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Components/Button',
  decorators: [withKnobs],
} as Meta;

const ButtonStory: Story<ButtonProps> = (props: ButtonProps) => (
  <Button {...props} disabled={boolean('disabled', false)}>
    {text('Content', 'Button')}
  </Button>
);

export const Default = ButtonStory.bind({});
