import type { FC } from "react";

import { useDictionary } from "@/shared/lib/localization";
import {
  Container,
  Section,
  Title,
  Accordion,
  AccordionItem,
} from "@/shared/ui";

import { FAQ_ITEMS_MAIN, FAQ_ITEMS_PARTNERS } from "./FAQ.constants";

import type { IFaqProps } from "./FAQ.types";

import { SectionWrapper, StyledAccordion } from "./FAQ.styled";

export const FAQ: FC<IFaqProps> = ({ variant }) => {
  const { faq, partnersFaq } = useDictionary();

  return (
    <Section pt pb>
      <Container>
        <SectionWrapper>
          <Title as="h2" level="h2">
            {faq.title}
          </Title>

          <StyledAccordion>
            <Accordion type="multiple">
              {variant === "main" &&
                FAQ_ITEMS_MAIN.map(({ id }) => (
                  <AccordionItem key={id} value={id} trigger={faq[id].question}>
                    {faq[id].answer}
                  </AccordionItem>
                ))}
              {variant === "partners" &&
                FAQ_ITEMS_PARTNERS.map(({ id }) => (
                  <AccordionItem
                    key={id}
                    value={id}
                    trigger={partnersFaq[id].question}
                  >
                    {faq[id].answer}
                  </AccordionItem>
                ))}
            </Accordion>
          </StyledAccordion>
        </SectionWrapper>
      </Container>
    </Section>
  );
};
