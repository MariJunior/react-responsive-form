import { TextField } from '../components/fields/text-field';
import { Checkbox } from '../components/fields/checkbox';
import { Dropdown } from '../components/fields/dropdown';
import { DropdownItemProps } from '../components/fields/dropdown/types';
import {
  CreateFormTextFieldConfigProps,
  CreateFormCheckboxConfigProps,
  CreateFormDropdownConfigProps
} from '../types';

export function createFormTextFieldConfig(label: string, name: string, type: 'text' | 'tel' | 'email' | 'password', placeholder: string, defaultValue: string = ''): CreateFormTextFieldConfigProps {
  return {
    renderTextInput: (handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: string, valid: boolean, error: string, key: string|number) => (
      <TextField
        key={key}
        type={type}
        label={label}
        name={name}
        placeholder={placeholder}
        handleChange={handleChange}
        isValid={valid}
        errorMessage={error}
      />
    ),
    label,
    type,
    value: defaultValue,
    valid: false,
    errorMessage: '',
    touched: false
  };
}

export function createFormCheckboxConfig(label: React.ReactNode, name: string, defaultChecked: boolean = false): CreateFormCheckboxConfigProps {
  return {
    renderCheckbox: (handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, checked: boolean, valid: boolean, error: string) => (
      <Checkbox
        key={Math.random()}
        name={name}
        handleChange={handleChange}
        isValid={valid}
        isChecked={checked}
        errorMessage={error}
      >
        {label}
      </Checkbox>
    ),
    type: 'checkbox',
    checked: defaultChecked,
    valid: false,
    errorMessage: '',
    touched: false
  }
}

export function createFormDropdownConfig(label: string, name: string, buttonName: string, items: DropdownItemProps[], placeholder?: string): CreateFormDropdownConfigProps {
  return {
    renderDropdown: (handleClick: (e: React.MouseEvent<HTMLElement>) => void, value: string, valid: boolean, error: string, key: string|number) => (
      <Dropdown
        key={key}
        label={label}
        name={name}
        buttonName={buttonName}
        items={items}
        placeholder={placeholder}
        handleClick={handleClick}
        isValid={valid}
        errorMessage={error}
      />
    ),
    label,
    type: 'dropdown',
    buttonName,
    value: '',
    valid: false,
    errorMessage: '',
    touched: 0
  }
}
