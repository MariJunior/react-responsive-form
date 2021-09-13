import { Meta, Story } from '@storybook/react';
import { withKnobs, radios, text, boolean } from '@storybook/addon-knobs';

import { TextField, TextFieldProps } from './text-field';

export default {
  component: TextField,
  title: 'Components/Fields/TextField',
  decorators: [withKnobs],
} as Meta;

const TextFieldStory: Story<TextFieldProps> = (props: TextFieldProps) => (
  <TextField
    type={radios('Input type', {text: 'text', email: 'email', tel: 'tel', password: 'password'}, 'text')}
    label={text('Label text', 'Label')}
    name='test-input'
    placeholder={text('Placeholder text', 'Placeholder')}
    pattern={text('Pattern exp', '')}
    handleChange={() => {}}
    isValid={boolean('Is field data valid?', true)}
    errorMessage={text('Error message', 'Введено некорректное значение')}
  />
);

export const Default = TextFieldStory.bind({});
