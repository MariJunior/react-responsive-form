import { TextField } from '../components/fields/text-field';
import { Checkbox } from '../components/fields/checkbox';
import { Dropdown } from '../components/fields/dropdown';
import { DropdownItemProps } from '../components/fields/dropdown/types';
import { dropdownItems } from '../components/fields/dropdown/data';

import {
  requiredRule,
  namePatternRule,
  emailPetternRule,
  telPetternRule,
  checkboxRequiredRule,
  dropdownRequiredRule
} from './inputValidationRules';
import { boolean } from '@storybook/addon-knobs';

function createFormTextFieldConfig(label: string, name: string, type: 'text' | 'tel' | 'email' | 'password', placeholder: string, defaultValue: string = '') {
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

function createFormCheckboxConfig(label: React.ReactNode, name: string, defaultChecked: boolean = false) {
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

function createFormDropdownConfig(label: string, name: string, buttonName: string, items: DropdownItemProps[], placeholder?: string) {
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

const checkboxLabel = <span>Принимаю <a href="#">условия</a> использования</span>;

export const signupForm = {
    user_name: {
      ...createFormTextFieldConfig('Имя', 'user_name', 'text', 'Введите Ваше имя'),
      validationRules: [
        requiredRule('Имя'),
        namePatternRule()
      ]
    },
    user_email: {
      ...createFormTextFieldConfig('Еmail', 'user_email', 'email', 'Введите ваш email'),
      validationRules: [
        requiredRule('Еmail'),
        emailPetternRule()
      ]
    },
    user_tel: {
      ...createFormTextFieldConfig('Номер телефона', 'user_tel', 'tel', 'Введите номер телефона'),
      validationRules: [
        requiredRule('Номер телефона'),
        telPetternRule()
      ]
    },
    user_lang: {
      ...createFormDropdownConfig('Язык', 'user_lang', 'user_lang_button', dropdownItems),
      validationRule: dropdownRequiredRule()
    },
    user_agreement: {
      ...createFormCheckboxConfig(checkboxLabel, 'user_agreement'),
      validationRule: checkboxRequiredRule()
    }
};
