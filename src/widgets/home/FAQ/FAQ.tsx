import { FC } from 'react';

import { Container, Section, Title } from '@/shared/ui';
import { Accordion, AccordionItem } from '@/shared/ui/';

import { FAQ_ITEMS } from './FAQ.constants';

import { SectionWrapper, StyledAccordion } from './FAQ.styled';

export const FAQ: FC = () => {
  return (
    <Section pt pb>
      <Container>
        <SectionWrapper>
          <Title as="h2" level="h2">
            Часто задаваемые вопросы
          </Title>

          <StyledAccordion>
            <Accordion type="multiple">
              {FAQ_ITEMS.map(({ answer, id, question }) => (
                <AccordionItem
                  key={id}
                  value={id}
                  trigger={question}
                >
                  {answer}
                </AccordionItem>
              ))}
            </Accordion>
          </StyledAccordion>
        </SectionWrapper>
      </Container>
    </Section>
  );
};