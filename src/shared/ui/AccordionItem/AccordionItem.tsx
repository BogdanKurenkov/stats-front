import type { FC } from 'react';

import { AccordionItemProps } from './AccordionItem.types';

import {
  StyledAccordionContent,
  StyledAccordionContentText,
  StyledAccordionHeader,
  StyledAccordionItem,
  StyledAccordionTrigger,
  StyledChevron,
} from './AccordionItem.styled';

export const AccordionItem: FC<AccordionItemProps> = ({ value, trigger, children }) => {
  return (
    <StyledAccordionItem
      value={value}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <StyledAccordionHeader>
        <StyledAccordionTrigger>
          {trigger}
          <StyledChevron aria-hidden />
        </StyledAccordionTrigger>
      </StyledAccordionHeader>
      <StyledAccordionContent>
        <StyledAccordionContentText>
          {children}
        </StyledAccordionContentText>
      </StyledAccordionContent>
    </StyledAccordionItem>
  );
};