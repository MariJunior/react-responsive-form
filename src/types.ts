type FormItemBasicProps = {
  valid: boolean,
  errorMessage: string,
}

export type CreateFormTextFieldConfigProps = {
  renderTextInput: (handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: string, valid: boolean, error: string, key: string | number) => JSX.Element,
  label: string,
  type: 'text' | 'tel' | 'email' | 'password',
  value: string,
  touched: boolean,
} & FormItemBasicProps;

export type CreateFormCheckboxConfigProps = {
  renderCheckbox: (handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, checked: boolean, valid: boolean, error: string) => JSX.Element,
  type: 'checkbox',
  checked: boolean,
  touched: boolean
} & FormItemBasicProps;

export type CreateFormDropdownConfigProps = {
  renderDropdown: (handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void, value: string, valid: boolean, error: string, key: string | number) => JSX.Element,
  label: string,
  type: 'dropdown',
  buttonName: string,
  value: string,
  touched: number,
} & FormItemBasicProps;
