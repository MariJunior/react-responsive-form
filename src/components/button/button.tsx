import { css } from '@emotion/core';
import styled from '@emotion/styled';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export function Button({ children, ...props }: React.PropsWithChildren<ButtonProps>) {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button<ButtonProps>`
  padding: 15px 63px;
  border-radius: 6px;
  border: 2px solid var(--colors-brilliantblue);
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: var(--colors-lightbluegray);
  background-color: var(--colors-brilliantblue);
  box-shadow: var(--shadow-sm), var(--shadow-rg);
  cursor: pointer;
  transition: all var(--transition-basic);

  &:hover {
    box-shadow: var(--shadow-md), var(--shadow-lg);
  }

  &:active {
    border-color: rgba(44, 39, 56, 0.86);
    box-shadow: var(--shadow-sm-light), var(--shadow-rg);
  }

  &:disabled {
    background-color: var(--colors-bluegray);
    border-color: var(--colors-bluegray);
    box-shadow: var(--shadow-rg);
    color: rgba(44, 39, 56, 0.5);
  }
`;
