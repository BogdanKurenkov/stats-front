import { FC } from 'react';

import { CustomLink } from '@/shared/ui';
import { ROUTES } from '@/shared/config';

import { useCookieConsent } from './useCookieConsent';

import {
  Overlay,
  Container,
  Content,
  StyledTitle,
  Description,
  ButtonsContainer,
  ActionButton,
} from './CookieConsent.styled';

export const CookieConsent: FC = () => {
  const { showConsent, isLoading, acceptCookies } = useCookieConsent();

  if (isLoading || !showConsent) return null;

  return (
    <Overlay>
      <Container>
        <Content>
          <StyledTitle as="h3" level="h3">
            🍪 Мы используем куки
          </StyledTitle>
          <Description>
            Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента.
            Продолжая использовать наш сайт, вы соглашаетесь с{' '}
            <CustomLink href={ROUTES.PRIVACY_POLICY} variant="underline">
              политикой конфиденциальности
            </CustomLink>
            .
          </Description>
        </Content>

        <ButtonsContainer>
          <ActionButton variant="primary" size="medium" onClick={acceptCookies}>
            Принять все
          </ActionButton>
          <ActionButton variant="outline" size="medium" onClick={acceptCookies}>
            Только необходимые
          </ActionButton>
        </ButtonsContainer>
      </Container>
    </Overlay>
  );
};