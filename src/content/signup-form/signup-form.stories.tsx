import { Meta, Story } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { SignupForm } from './signup-form';

export default {
  component: SignupForm,
  title: 'Content/SignupForm',
  decorators: [withKnobs],
} as Meta;

const SignupFormStory: Story = () => (
  <SignupForm />
);

export const Default = SignupFormStory.bind({});
