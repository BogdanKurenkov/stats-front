import { FC } from 'react';

import { useDictionary } from '@/shared/lib/localization';
import { Container, Section, Title, Paragraph } from '@/shared/ui';

import {
  PolicyWrapper,
  SectionBlock,
  Subtitle,
  List,
  ListItem,
  LastUpdate,
  ContactBox,
} from './PrivacyPolicy.styled';

export const PrivacyPolicy: FC = () => {
  const dict = useDictionary();
  const privacy = dict?.privacyPolicy;
  const sections = privacy?.sections;

  const currentDate = new Date().toLocaleDateString('ru-RU');

  return (
    <Section pt pb>
      <Container>
        <PolicyWrapper>
          <Title as="h1" level="h1">
            {privacy.title}
          </Title>
          <LastUpdate>
            {privacy.lastUpdate} {currentDate}
          </LastUpdate>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.intro.title}</Title>
            <Paragraph>{sections.intro.text}</Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.whatWeCollect.title}</Title>

            <Subtitle>{sections.whatWeCollect.subsections.userProvided.title}</Subtitle>
            <List>
              {sections.whatWeCollect.subsections.userProvided.items.map((item: string, index: number) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>

            <Subtitle>{sections.whatWeCollect.subsections.automatic.title}</Subtitle>
            <List>
              {sections.whatWeCollect.subsections.automatic.items.map((item: string, index: number) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.howWeUse.title}</Title>
            <List>
              {sections.howWeUse.items.map((item: string, index: number) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
            <Paragraph>{sections.howWeUse.note}</Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.thirdParty.title}</Title>
            <Paragraph>{sections.thirdParty.text}</Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.yourRights.title}</Title>
            <Paragraph>{sections.yourRights.text}</Paragraph>
            <List>
              {sections.yourRights.items.map((item: string, index: number) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
            <Paragraph>
              {sections.yourRights.contactText} <strong>{sections.yourRights.email}</strong>
            </Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.retention.title}</Title>
            <Paragraph>{sections.retention.text}</Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.security.title}</Title>
            <Paragraph>{sections.security.text}</Paragraph>
            <List>
              {sections.security.items.map((item: string, index: number) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.children.title}</Title>
            <Paragraph>{sections.children.text}</Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{sections.contacts.title}</Title>
            <ContactBox>
              <Paragraph>{sections.contacts.text}</Paragraph>
              <List>
                {sections.contacts.items.map((item: string, index: number) => (
                  <ListItem key={index}>
                    {item.split(':')[0]}: <strong>{item.split(':')[1]}</strong>
                  </ListItem>
                ))}
              </List>
            </ContactBox>
          </SectionBlock>
        </PolicyWrapper>
      </Container>
    </Section>
  );
};