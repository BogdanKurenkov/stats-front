import { FC } from 'react';
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
  const currentDate = new Date().toLocaleDateString('ru-RU');

  return (
    <Section pt pb>
      <Container>
        <PolicyWrapper>
          <Title as="h1" level="h1">
            Политика использования cookies
          </Title>
          <LastUpdate>Последнее обновление: {currentDate}</LastUpdate>

          <SectionBlock>
            <Title as="h2" level="h2">Что такое cookies?</Title>
            <Paragraph>
              Cookies — это небольшие текстовые файлы, которые сайт сохраняет на вашем устройстве
              для обеспечения корректной работы.
            </Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">Какие cookies мы используем</Title>
            <Paragraph>
              На сайте Stats.net используются cookies исключительно для аутентификации пользователей.
            </Paragraph>

            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Cookie</TableHeader>
                  <TableHeader>Назначение</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>access_token (httpOnly)</TableCell>
                  <TableCell>Аутентификация пользователя в течение сессии</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>refresh_token (httpOnly)</TableCell>
                  <TableCell>Автоматическое обновление токена доступа</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <Paragraph>
              Эти cookies являются <strong>технически необходимыми</strong>. Без них вы не сможете
              войти в свой аккаунт или использовать функции, требующие авторизации.
            </Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">Cookies третьих сторон</Title>
            <Paragraph>
              Мы не используем cookies третьих сторон, включая:
            </Paragraph>
            <ul>
              <li>Google Analytics</li>
              <li>Яндекс.Метрику</li>
              <li>Рекламные пиксели</li>
              <li>Системы отслеживания</li>
            </ul>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">Как управлять cookies</Title>
            <Paragraph>
              Вы можете отключить cookies в настройках вашего браузера. Однако обратите внимание,
              что <strong>отключение cookies сделает невозможным вход в аккаунт</strong>.
            </Paragraph>
            <Paragraph>
              Инструкции для популярных браузеров:
            </Paragraph>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/ru/kb/udalite-kuki-dlya-udaleniya-informacii-kotoruyu" target="_blank" rel="noopener noreferrer">Firefox</a></li>
              <li><a href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/ru-ru/microsoft-edge/udalite-faily-cookie-v-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">Согласие</Title>
            <Paragraph>
              Используя наш сайт, вы соглашаетесь с использованием технически необходимых cookies.
              Эти cookies не требуют отдельного согласия, так как обеспечивают базовую функциональность сайта.
            </Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">Контакты</Title>
            <Paragraph>
              По вопросам, связанным с cookies, вы можете связаться с нами:
            </Paragraph>
            <Paragraph>
              Email: <strong>privacy@stats.net</strong>
            </Paragraph>
          </SectionBlock>
        </PolicyWrapper>
      </Container>
    </Section>
  );
};