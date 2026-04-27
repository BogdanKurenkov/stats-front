import { FC } from 'react';
import Link from 'next/link';

import { useDictionary } from '@/shared/lib/localization';
import { Container, Section, Title, Paragraph } from '@/shared/ui';

import {
  PolicyWrapper,
  SectionBlock,
  Subtitle,
  List,
  ListItem,
  LastUpdate,
} from './TermsOfUse.styled';

export const TermsOfUse: FC = () => {
  const dict = useDictionary();
  const terms = dict?.termsOfUse;
  const sections = terms?.sections;

  const currentDate = new Date().toLocaleDateString('ru-RU');

  return (
    <Section pt pb>
      <Container>
        <PolicyWrapper>
          <Title as="h1" level="h1">
            {terms.title}
          </Title>
          <LastUpdate>
            {terms.lastUpdate} {currentDate}
          </LastUpdate>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.general.title}</Title>
            {sections.general.clauses.map((clause: string, index: number) => (
              <Paragraph key={index}>{clause}</Paragraph>
            ))}
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.registration.title}</Title>
            {sections.registration.clauses.map((clause: string, index: number) => (
              <Paragraph key={index}>{clause}</Paragraph>
            ))}
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.userRightsAndDuties.title}</Title>

            <Subtitle>{sections.userRightsAndDuties.rights.title}</Subtitle>
            <List>
              {sections.userRightsAndDuties.rights.items.map((item: string, index: number) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>

            <Subtitle>{sections.userRightsAndDuties.duties.title}</Subtitle>
            <List>
              {sections.userRightsAndDuties.duties.items.map((item: string, index: number) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.intellectualProperty.title}</Title>
            {sections.intellectualProperty.clauses.map((clause: string, index: number) => (
              <Paragraph key={index}>{clause}</Paragraph>
            ))}
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.liability.title}</Title>
            <Paragraph>{sections.liability.intro}</Paragraph>
            <List>
              {sections.liability.items.map((item: string, index: number) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
            <Paragraph>{sections.liability.note}</Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.confidentiality.title}</Title>
            <Paragraph>
              {sections.confidentiality.clauses[0]}
              <Link href="/privacy-policy">{sections.confidentiality.privacyPolicyLink}</Link>
            </Paragraph>
            <Paragraph>{sections.confidentiality.clauses[1]}</Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.final.title}</Title>
            {sections.final.clauses.slice(0, -1).map((clause: string, index: number) => (
              <Paragraph key={index}>{clause}</Paragraph>
            ))}
            <Paragraph>
              {sections.final.clauses[sections.final.clauses.length - 1]} <strong>{sections.final.email}</strong>
            </Paragraph>
          </SectionBlock>
        </PolicyWrapper>
      </Container>
    </Section>
  );
};