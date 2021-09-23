import styled from '@emotion/styled';

import { useForm } from '../../utils/useForm';

import { Button } from '../../components/button';
import { SignupFormConfigProps } from './types';

export interface SignupFormProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  title: string,
  tip?: React.ReactNode,
  formConfigData: SignupFormConfigProps,
  submitButtonText: string,
}

export function SignupForm ({ title, tip, formConfigData, submitButtonText, ...props }: SignupFormProps) {
  console.log(formConfigData);

  const { renderFormInputs, isFormValid } = useForm(formConfigData);

  return (
    <Form {...props}>
      <FormTitle>{title}</FormTitle>
      {tip && (
        <FormSigninTip>
          {tip}
        </FormSigninTip>
      )}
      <FormWrap>
        {renderFormInputs()}
      </FormWrap>
      <FormButton type='submit' disabled={!isFormValid()}>{submitButtonText}</FormButton>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  max-width: 480px;
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

  a {
    color: var(--colors-brilliantblue);
  }
`;

const FormWrap = styled.div`
  display: grid;
  grid-row-gap: 10px;
  margin-bottom: 40px;
`;

const FormButton = styled(Button)`
  width: 100%;
`;
