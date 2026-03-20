import {
  StyledAccordionContent,
  StyledAccordionContentText,
  StyledAccordionHeader,
  StyledAccordionItem,
  StyledAccordionTrigger,
  StyledChevron,
} from './AccordionItem.styled';
import { AccordionItemProps } from './AccordionItem.types';


export const AccordionItem = ({ value, trigger, children }: AccordionItemProps) => {
  return (
    <StyledAccordionItem value={value}>
      <StyledAccordionHeader>
        <StyledAccordionTrigger>
          {trigger}
          <StyledChevron aria-hidden />
        </StyledAccordionTrigger>
      </StyledAccordionHeader>
      <StyledAccordionContent>
        <StyledAccordionContentText>{children}</StyledAccordionContentText>
      </StyledAccordionContent>
    </StyledAccordionItem>
  );
};