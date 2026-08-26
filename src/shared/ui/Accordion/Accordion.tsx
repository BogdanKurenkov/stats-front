import type { FC } from 'react';

import { AccordionProps } from './Accordion.types';

import { StyledAccordionRoot } from './Accordion.styled';

export const Accordion: FC<AccordionProps> = ({
  children,
  className,
  type,
  defaultValue,
}) => {
  if (type === 'single') {
    return (
      <StyledAccordionRoot
        type="single"
        defaultValue={defaultValue}
        collapsible
        className={className}
      >
        {children}
      </StyledAccordionRoot>
    );
  }

  return (
    <StyledAccordionRoot
      type="multiple"
      defaultValue={defaultValue}
      className={className}
    >
      {children}
    </StyledAccordionRoot>
  );
};