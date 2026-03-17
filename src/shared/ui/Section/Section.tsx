import { forwardRef } from 'react';
import { SectionWrapper } from './Section.styled';
import { SectionProps } from './Section.types';

export const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const {
    children,
    as = 'section',
    pt = true,
    pb = true,
    ...rest
  } = props;

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
});

Section.displayName = 'Section';