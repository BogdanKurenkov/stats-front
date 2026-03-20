import { FC, useState, useEffect } from 'react';
import { CustomLink } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import {
  Overlay,
  Container,
  Content,
  StyledTitle,
  Description,
  ButtonsContainer,
  ActionButton,
} from './CookieConsent.styled';
import { CookieConsentProps } from './CookieConsent.types';
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_VALUES } from './CookieConsent.constants';

export const CookieConsent: FC<CookieConsentProps> = ({
  onAccept,
  onReject,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_VALUES.ACCEPTED);
    setIsVisible(false);
    onAccept?.();
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_VALUES.REJECTED);
    setIsVisible(false);
    onReject?.();
  };

  if (!isVisible) return null;

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
          <ActionButton variant="primary" size="medium" onClick={handleAccept}>
            Принять все
          </ActionButton>
          <ActionButton variant="outline" size="medium" onClick={handleReject}>
            Только необходимые
          </ActionButton>
        </ButtonsContainer>
      </Container>
    </Overlay>
  );
};