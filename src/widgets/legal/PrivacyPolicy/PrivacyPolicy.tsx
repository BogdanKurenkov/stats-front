import { FC } from 'react';
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
  const currentDate = new Date().toLocaleDateString('ru-RU');

  return (
    <Section pt pb>
      <Container>
        <PolicyWrapper>
          <Title as="h1" level="h1">
            Политика конфиденциальности
          </Title>
          <LastUpdate>Последнее обновление: {currentDate}</LastUpdate>

          <SectionBlock>
            <Title as="h2" level="h2">1. Введение</Title>
            <Paragraph>
              Stats.net («мы», «нас» или «сайт») стремится защищать вашу конфиденциальность.
              Настоящая Политика конфиденциальности описывает, как мы собираем, используем и защищаем ваши персональные данные
              в соответствии с Федеральным законом «О персональных данных» № 152-ФЗ.
            </Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">2. Какие данные мы собираем</Title>
            <Subtitle>2.1 Данные, которые вы предоставляете</Subtitle>
            <List>
              <ListItem>Электронная почта — необходима для создания учетной записи и доступа к сервисам</ListItem>
              <ListItem>Имя — используется для персонализации (опционально)</ListItem>
              <ListItem>Пароль — хранится в зашифрованном виде</ListItem>
            </List>
            <Subtitle>2.2 Данные, собираемые автоматически</Subtitle>
            <List>
              <ListItem>Cookies аутентификации (httpOnly) — используются исключительно для управления сессиями</ListItem>
              <ListItem>IP-адрес — временно собирается для обеспечения безопасности</ListItem>
            </List>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">3. Как мы используем ваши данные</Title>
            <List>
              <ListItem>Создание и управление учетной записью</ListItem>
              <ListItem>Обеспечение безопасности и аутентификации</ListItem>
              <ListItem>Выполнение обязательств перед пользователями</ListItem>
            </List>
            <Paragraph>
              Мы НЕ используем ваши данные для маркетинга, рекламы или передачи третьим лицам.
            </Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">4. Передача данных третьим лицам</Title>
            <Paragraph>
              Мы не передаем ваши персональные данные третьим лицам. Данные аутентификации обрабатываются
              исключительно на наших серверах.
            </Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">5. Ваши права</Title>
            <Paragraph>
              Вы имеете право на:
            </Paragraph>
            <List>
              <ListItem>Подтверждение факта обработки данных</ListItem>
              <ListItem>Доступ к вашим данным</ListItem>
              <ListItem>Исправление неточных данных</ListItem>
              <ListItem>Удаление данных</ListItem>
              <ListItem>Отзыв согласия на обработку</ListItem>
            </List>
            <Paragraph>
              Чтобы воспользоваться своими правами, отправьте запрос на адрес: <strong>privacy@stats.net</strong>
            </Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">6. Срок хранения данных</Title>
            <Paragraph>
              Ваши данные хранятся до тех пор, пока ваша учетная запись активна. После запроса на удаление
              данные будут уничтожены в течение 30 дней, если иное не предусмотрено законодательством.
            </Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">7. Безопасность</Title>
            <Paragraph>
              Мы принимаем технические и организационные меры для защиты ваших данных:
            </Paragraph>
            <List>
              <ListItem>Шифрование паролей</ListItem>
              <ListItem>httpOnly cookies — защищены от доступа через JavaScript</ListItem>
              <ListItem>HTTPS-соединение</ListItem>
              <ListItem>Ограниченный доступ к данным</ListItem>
            </List>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">8. Дети</Title>
            <Paragraph>
              Наш сайт не предназначен для лиц младше 18 лет. Мы не собираем намеренно данные несовершеннолетних.
              Если вы являетесь родителем или опекуном и считаете, что ваш ребенок предоставил нам персональные данные,
              пожалуйста, свяжитесь с нами.
            </Paragraph>
          </SectionBlock>

          <SectionBlock>
            <Title as="h2" level="h2">9. Контакты</Title>
            <ContactBox>
              <Paragraph>
                По вопросам конфиденциальности вы можете связаться с нами:
              </Paragraph>
              <List>
                <ListItem>Email: <strong>privacy@stats.net</strong></ListItem>
                <ListItem>Служба поддержки: <strong>support@stats.net</strong></ListItem>
              </List>
            </ContactBox>
          </SectionBlock>
        </PolicyWrapper>
      </Container>
    </Section>
  );
};