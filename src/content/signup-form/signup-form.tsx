import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { useForm } from '../../utils/useForm';
import { signupForm } from '../../utils/formConfig';

import { Checkbox } from '../../components/fields/checkbox';
import { Dropdown } from '../../components/fields/dropdown';
import { Button } from '../../components/button';
import { dropdownItems } from '../../components/fields/dropdown/data';

export function SignupForm () {
  const { renderFormInputs, isFormValid } = useForm(signupForm);

  return (
    <Form>
      <FormTitle>Регистрация</FormTitle>
      <FormSigninTip>
        Уже есть аккаунт? <FormSigninTipLink href='#'>Войти</FormSigninTipLink>
      </FormSigninTip>
      <FormWrap>
        {renderFormInputs()}
        <FormDropdown
          label='Язык'
          name='user-lang'
          items={dropdownItems}
        />
        <FormCheckbox
          name='user-agreement'
          required
        >
          <span>Принимаю <a href="#">условия</a> использования</span>
        </FormCheckbox>
      </FormWrap>
      <FormButton type='submit' disabled={!isFormValid()}>Зарегистрироваться</FormButton>
    </Form>
  );
}

const Form = styled.form`
  max-width: 480px;
  margin: 0 auto;
  padding: 40px 30px;
  border-radius: 24px;
  background-color: var(--colors-white);
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
`;

const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 34px;
  line-height: 44px;
  color: var(--colors-darkgray);
`;

const FormSigninTip = styled.p`
  margin-top: 0;
  margin-bottom: 55px;
  color: var(--colors-darkgray);
`;

const FormSigninTipLink = styled.a`
  color: var(--colors-brilliantblue);
`;

const FormWrap = styled.div`
  display: grid;
  grid-row-gap: 10px;
  margin-bottom: 40px;
`;

const FormDropdown = styled(Dropdown)`
  margin-bottom: 20px;
`;

const FormCheckbox = styled(Checkbox)``;

const FormButton = styled(Button)`
  width: 100%;
`;
