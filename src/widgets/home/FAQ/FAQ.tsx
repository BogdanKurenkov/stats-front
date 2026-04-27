import type { FC } from 'react';

import { Container, Section, Title } from '@/shared/ui';
import { Accordion, AccordionItem } from '@/shared/ui/';
import { useDictionary } from '@/shared/lib/localization';

import { FAQ_ITEMS } from './FAQ.constants';

import { SectionWrapper, StyledAccordion } from './FAQ.styled';

export const FAQ: FC = () => {
  const { faq } = useDictionary();

  return (
    <Section pt pb>
      <Container>
        <SectionWrapper>
          <Title as="h2" level="h2">
            {faq.title}
          </Title>

          <StyledAccordion>
            <Accordion type="multiple">
              {FAQ_ITEMS.map(({ id }) => (
                <AccordionItem
                  key={id}
                  value={id}
                  trigger={faq[id].question}
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