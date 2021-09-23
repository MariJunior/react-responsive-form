import {
  CreateFormTextFieldConfigProps,
  CreateFormCheckboxConfigProps,
  CreateFormDropdownConfigProps
} from '../../types';

type ValidationRuleProps = {
  name: string;
  message: string;
  validate: CallableFunction;
}

type SignupFormTextItemProps = {
  validationRules?: ValidationRuleProps[],
} & CreateFormTextFieldConfigProps;

type SignupFormCheckboxItemProps = {
  validationRule?: ValidationRuleProps
} & CreateFormCheckboxConfigProps;

type SignupFormDropdownItemProps = {
  validationRule?: ValidationRuleProps
} & CreateFormDropdownConfigProps;

export type SignupFormConfigProps = {
  [key: string]: SignupFormTextItemProps | SignupFormCheckboxItemProps | SignupFormDropdownItemProps
};
