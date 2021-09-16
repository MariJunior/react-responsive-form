import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Dropdown, DropdownProps } from './dropdown';
import { dropdownItems } from './data';

export default {
  component: Dropdown,
  title: 'Components/Fields/Dropdown',
  decorators: [withKnobs],
} as Meta;

const DropdownStory: Story<DropdownProps> = (props: DropdownProps) => (
  <Dropdown
    label={text('Label value', 'Язык')}
    name='test-dropdown-lang'
    placeholder={text('Placeholder value', '')}
    items={dropdownItems}
  />
);

export const Default = DropdownStory.bind({});
