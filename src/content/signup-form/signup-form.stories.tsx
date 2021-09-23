import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { SignupForm } from './signup-form';
import { signupFormConfig } from './data';

export default {
  component: SignupForm,
  title: 'Content/SignupForm',
  decorators: [withKnobs],
} as Meta;

const SignupFormStory: Story = () => (
  <SignupForm
    title={text('Form title', 'Регистрация')}
    tip={<>Уже есть аккаунт? <a href='#'>Войти</a></>}
    formConfigData={signupFormConfig}
    submitButtonText={text('Submit button text', 'Зарегистрироваться')}
  />
);

export const Default = SignupFormStory.bind({});
