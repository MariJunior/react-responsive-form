import styled from '@emotion/styled';

export interface TextFieldProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'text' | 'tel' | 'email' | 'password',
  label: string,
  name: string,
  placeholder: string,
  value: string,
  pattern?: string,
  disabled?: boolean,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  isValid?: boolean,
  errorMessage?: string,
}

export function TextField({
  type,
  label,
  name,
  placeholder,
  value,
  pattern,
  disabled,
  handleChange,
  isValid,
  errorMessage,
  ...props
}: TextFieldProps) {
  return (
    <Wrapper {...props}>
      <Label htmlFor={name}>{label}</Label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        disabled={disabled}
        onChange={handleChange}
      />
      {errorMessage && !isValid && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 7px;
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--colors-gray);
`;

const Field = styled.input`
  width: 100%;
  height: 52px;
  padding: 15px 95px 15px 15px;
  border: 1px solid var(--colors-bluegray);
  border-radius: 6px;
  font-weight: normal;
  color: var(--colors-darkgray);
  background-color: var(--colors-white);
  box-shadow: var(--shadow-rg-light);
  transition: border var(--transition-basic);

  &::placeholder {
    color: var(--colors-bluegray);
  }

  &:focus {
    border: 2px solid var(--colors-brilliantblue);
    outline: none;
  }
`;

const ErrorMessage = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  color: var(--colors-red);
`;
