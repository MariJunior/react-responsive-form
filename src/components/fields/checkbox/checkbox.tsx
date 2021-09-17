import { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

export interface CheckboxProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string,
  children: React.ReactNode,
  required?: boolean,
  errorMessage?: string,
  checkedDefault?: boolean,
}

export function Checkbox({
  name,
  children,
  required,
  errorMessage = 'Заполните поле',
  checkedDefault = false,
  ...props
}: CheckboxProps) {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(checkedDefault);

  const validateCheckbox = () => {
    setIsTouched(true);
    setIsChecked(!isChecked);
  };

  return (
    <Wrapper {...props}>
      <Field
        type='checkbox'
        id={name}
        name={name}
        required={required}
        checked={isChecked}
        onChange={validateCheckbox}
      />
      <label
        htmlFor={name}
      >
        {children}
      </label>
      {required && isTouched && !isChecked && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-row-gap: 7px;
  padding-bottom: 26px;
`;

const Field = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  appearance: none;

  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: var(--colors-gray);
    cursor: pointer;

    a {
      text-decoration: none;
      color: var(--colors-brilliantblue);
    }
  }

  & + label::before {
    content: '';
    display: inline-block;
    flex-shrink: 0;
    flex-grow: 0;
    width: 28px;
    height: 28px;
    margin-right: 8px;
    border: 1px solid var(--colors-bluegray);
    border-radius: 4px;
    background-color: var(--colors-white);
    box-shadow: var(--shadow-rg-light);
    transition: all var(--transition-basic);
  }

  &:checked + label::before {
    border: 2px solid var(--colors-brilliantblue);
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.6343 6.63434C18.9467 6.32192 19.4533 6.32192 19.7657 6.63434C20.0781 6.94676 20.0781 7.45329 19.7657 7.76571L10.1657 17.3657C9.85325 17.6781 9.34672 17.6781 9.0343 17.3657L5.0343 13.3657C4.72188 13.0533 4.72188 12.5468 5.0343 12.2343C5.34672 11.9219 5.85325 11.9219 6.16567 12.2343L9.59999 15.6687L18.6343 6.63434Z' fill='black'/%3E%3Cmask id='mask0' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='4' y='6' width='16' height='12'%3E%3Cpath d='M18.6343 6.63434C18.9467 6.32192 19.4533 6.32192 19.7657 6.63434C20.0781 6.94676 20.0781 7.45329 19.7657 7.76571L10.1657 17.3657C9.85325 17.6781 9.34672 17.6781 9.0343 17.3657L5.0343 13.3657C4.72188 13.0533 4.72188 12.5468 5.0343 12.2343C5.34672 11.9219 5.85325 11.9219 6.16567 12.2343L9.59999 15.6687L18.6343 6.63434Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0)'%3E%3Crect width='24' height='24' fill='%230880AE'/%3E%3C/g%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  color: var(--colors-red);
`;
