import { Meta, Story } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Checkbox, CheckboxProps } from './checkbox';

export default {
  component: Checkbox,
  title: 'Components/Fields/Checkbox',
  decorators: [withKnobs],
} as Meta;

const CheckboxStory: Story<CheckboxProps> = (props: CheckboxProps) => (
  <Checkbox
    name='test-chechbox'
    handleChange={() => {}}
    isValid={boolean('Is field data valid?', true)}
    isChecked={boolean('Is checkbox ckecked?', false)}
    errorMessage={text('Error message', 'Заполните поле')}
  >
    <span>Принимаю <a href="#">условия</a> использования</span>
  </Checkbox>
);

export const Default = CheckboxStory.bind({});
