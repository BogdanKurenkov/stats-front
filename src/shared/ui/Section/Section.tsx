import { forwardRef } from 'react';

import type { SectionProps } from './Section.types';

import { SectionWrapper } from './Section.styled';

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      as = 'section',
      pt = true,
      pb = true,
      ...rest
    },
    ref
  ) => {
    return (
      <SectionWrapper
        ref={ref}
        as={as}
        $pt={pt}
        $pb={pb}
        {...rest}
      >
        {children}
      </SectionWrapper>
    );
  }
);

Section.displayName = 'Section';