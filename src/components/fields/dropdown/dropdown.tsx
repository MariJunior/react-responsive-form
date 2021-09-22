import React, { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ifProp } from '../../../lib/if-prop';

import { DropdownItemProps } from './types';

export interface DropdownProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label: string,
  name: string,
  buttonName: string,
  items: DropdownItemProps[],
  placeholder?: string,
  handleClick: (e: React.MouseEvent<HTMLElement>) => void,
  isValid?: string,
  errorMessage?: string
}

export function Dropdown({
  label,
  name,
  buttonName,
  placeholder,
  items,
  handleClick,
  isValid,
  errorMessage = 'Выберите одно из значений списка',
  ...props
}: DropdownProps) {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [dropdownTitle, setDropdownTitle] = useState<string>(placeholder && placeholder.length > 0 ? placeholder : label);
  const [selectedValue, setSelectedValue] = useState<string>('');

  const onDropdownClick = () => setIsListOpen(!isListOpen);

  const selectItem = (item: DropdownItemProps) => () => {
    setDropdownTitle(item.title);
    setSelectedValue(item.value);
    setIsListOpen(false);
  };

  const renderDropdownList = () => {
    return (items.map(item => (
      <DropdownListItem
        key={item.id}
        type='button'
        value={item.value}
        onClick={selectItem(item)}
      >
        {item.title}
      </DropdownListItem>
    )));
  };

  return (
    <Wrapper {...props}>
      <DropdownLabel>{label}</DropdownLabel>
      <DropdownContainer
        data-name={name}
        onClick={handleClick}
      >
        <DropdownHeader
          type='button'
          onClick={onDropdownClick}
          name={buttonName}
          value={selectedValue}
          opened={isListOpen}
        >
          {dropdownTitle}
        </DropdownHeader>
        {isListOpen && (
          <DropdownList>
            {renderDropdownList()}
          </DropdownList>
        )}
      </DropdownContainer>
      {errorMessage && !isValid && (
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

const DropdownLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: var(--colors-gray);
`;

interface DropdownElementsBaseProps {
  opened?: boolean,
};

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownHeader = styled.button<DropdownElementsBaseProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 15px;
  border-radius: 6px;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: var(--colors-darkgray);
  background-color: var(--colors-white);
  box-shadow: var(--shadow-rg-light);
  cursor: pointer;
  transition: border var(--transition-basic);

  ${ifProp(
    'opened',
    css`
      border: 2px solid var(--colors-brilliantblue);
    `,
    css`
      border: 1px solid var(--colors-bluegray);
    `
  )}

  &:active {
    border: 2px solid var(--colors-brilliantblue);
  }

  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z' fill='black'/%3E%3Cmask id='mask0' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='7' y='11' width='16' height='9'%3E%3Cpath d='M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0)'%3E%3Crect width='30' height='30' fill='%230880AE'/%3E%3C/g%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const DropdownList = styled.div`
  position: sticky;
  z-index: 10;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 12px 0;
  border: 1px solid var(--colors-bluegray);
  border-radius: 6px;
  background-color: var(--colors-white);
  box-shadow: var(--shadow-rg-light), var(--shadow-ml);
`;

const DropdownListItem = styled.button`
  padding: 12px 15px;
  border: none;
  text-align: left;
  font-size: 16px;
  line-height: 21px;
  color: var(--colors-gray);
  background-color: var(--colors-white);
  cursor: pointer;
  transition: background-color var(--transition-basic);

  &:hover {
    background-color: var(--colors-lightbluegray);
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
