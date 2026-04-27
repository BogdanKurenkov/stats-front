import { FC } from 'react';
import { useDictionary } from '@/shared/lib/localization';

import { Container, Section, Title, Paragraph } from '@/shared/ui';

import {
  PolicyWrapper,
  SectionBlock,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  LastUpdate,
} from './CookiePolicy.styled';

export const CookiePolicy: FC = () => {
  const { cookiePolicy: cookie } = useDictionary();

  const currentDate = new Date().toLocaleDateString('ru-RU');

  return (
    <Section pt pb>
      <Container>
        <PolicyWrapper>
          <Title as="h1" level="h1">
            {cookie.title}
          </Title>
          <LastUpdate>
            {cookie.lastUpdate} {currentDate}
          </LastUpdate>

          <SectionBlock>
            <Title as="h2" level="h2">{cookie.whatIsCookies.title}</Title>
            <Paragraph>{cookie.whatIsCookies.text}</Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{cookie.whatCookiesWeUse.title}</Title>
            <Paragraph>{cookie.whatCookiesWeUse.text}</Paragraph>

            <Table>
              <thead>
                <TableRow>
                  <TableHeader>{cookie.whatCookiesWeUse.table.cookie}</TableHeader>
                  <TableHeader>{cookie.whatCookiesWeUse.table.purpose}</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>{cookie.whatCookiesWeUse.table.accessToken}</TableCell>
                  <TableCell>{cookie.whatCookiesWeUse.table.accessTokenPurpose}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{cookie.whatCookiesWeUse.table.refreshToken}</TableCell>
                  <TableCell>{cookie.whatCookiesWeUse.table.refreshTokenPurpose}</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <Paragraph
              dangerouslySetInnerHTML={{
                __html: cookie.whatCookiesWeUse.table.note
              }}
            />
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{cookie.thirdParty.title}</Title>
            <Paragraph>{cookie.thirdParty.text}</Paragraph>
            <ul>
              {cookie.thirdParty.items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{cookie.howToManage.title}</Title>
            <Paragraph
              dangerouslySetInnerHTML={{
                __html: cookie.howToManage.text1
              }}
            />
            <Paragraph>{cookie.howToManage.text2}</Paragraph>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                  {cookie.howToManage.links.chrome}
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/ru/kb/udalite-kuki-dlya-udaleniya-informacii-kotoruyu" target="_blank" rel="noopener noreferrer">
                  {cookie.howToManage.links.firefox}
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                  {cookie.howToManage.links.safari}
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/ru-ru/microsoft-edge/udalite-faily-cookie-v-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
                  {cookie.howToManage.links.edge}
                </a>
              </li>
            </ul>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{cookie.consent.title}</Title>
            <Paragraph>{cookie.consent.text}</Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">{cookie.contacts.title}</Title>
            <Paragraph>{cookie.contacts.text}</Paragraph>
            <Paragraph
              dangerouslySetInnerHTML={{
                __html: cookie.contacts.email
              }}
            />
          </SectionBlock>
        </PolicyWrapper>
      </Container>
    </Section>
  );
};