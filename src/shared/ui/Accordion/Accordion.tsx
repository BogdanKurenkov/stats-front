import { StyledAccordionRoot, } from './Accordion.styled';
import { AccordionProps } from './Accordion.types';

export const Accordion = (props: AccordionProps) => {
  const { children, className, type } = props;

  if (type === 'single') {
    const { defaultValue, collapsible = true } = props;
    return (
      <StyledAccordionRoot
        type="single"
        defaultValue={defaultValue}
        collapsible={collapsible}
        className={className}
      >
        {children}
      </StyledAccordionRoot>
    );
  }

  const { defaultValue } = props;
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