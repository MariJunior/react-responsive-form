import {
  createFormTextFieldConfig,
  createFormDropdownConfig,
  createFormCheckboxConfig
} from '../../utils/formConfig';
import {
  requiredRule,
  namePatternRule,
  emailPetternRule,
  telPetternRule,
  checkboxRequiredRule,
  dropdownRequiredRule
} from '../../utils/inputValidationRules';
import { dropdownItems } from '../../components/fields/dropdown/data';
import { SignupFormConfigProps } from './types';

const checkboxLabel = <span>Принимаю <a href="#">условия</a> использования</span>;

export const signupFormConfig: SignupFormConfigProps = {
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
