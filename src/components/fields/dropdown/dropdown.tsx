import { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { DropdownItemProps } from './types';

export interface DropdownProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label: string,
  placeholder?: string,
  items: DropdownItemProps[]
}

export function Dropdown({ label, placeholder, items, ...props }: DropdownProps) {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [dropdownTitle, setDropdownTitle] = useState<string>(placeholder && placeholder.length > 0 ? placeholder : label);
  const [selectedValue, setSelectedValue] = useState<string>('');

  const toggleList = () => setIsListOpen(!isListOpen);

  const selectItem = (item: DropdownItemProps) => {
    setDropdownTitle(item.title);
    setSelectedValue(item.key);
    setIsListOpen(false);
  };

  const renderDropdownList = () => {
    return (items.map(item => (
      <DropdownListItem
        key={item.id}
        type='button'
        value={item.key}
        onClick={selectItem(item)}
      >
        {item.title}
      </DropdownListItem>
    )));
  };

  return (
    <Wrapper {...props}>
      <DropdownLabel>{label}</DropdownLabel>
      <DropdownContainer>
        <DropdownHeader
          type='button'
          onClick={toggleList}
          value={selectedValue}
          opened={isListOpen}
        >
          {dropdownTitle}
          {/* TODO: стрелку сделать псевдоэлементом */}
          {/* <DropdownHeaderArrow></DropdownHeaderArrow> */}
        </DropdownHeader>
          <DropdownList>
            {renderDropdownList()}
          </DropdownList>
      </DropdownContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const DropdownLabel = styled.span``;

interface DropdownElementsBaseProps {
  opened?: boolean,
};

const DropdownContainer = styled.div``;

const DropdownHeader = styled.button<DropdownElementsBaseProps>``;

// const DropdownHeaderTitle = styled.span``;

// const DropdownHeaderArrow = styled.span``;

const DropdownList = styled.div``;

const DropdownListItem = styled.button``;
