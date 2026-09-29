import type { FC } from "react";

import { useDictionary } from "@/shared/lib/localization";
import { CustomLink } from "@/shared/ui";
import { ROUTES } from "@/shared/config";

import { useCookieConsent } from "./useCookieConsent";

import {
  Overlay,
  Container,
  Content,
  StyledTitle,
  Description,
  ButtonsContainer,
  ActionButton,
} from "./CookieConsent.styled";

export const CookieConsent: FC = () => {
  const { cookieConsent: consent } = useDictionary();
  const { showConsent, isLoading, acceptCookies } = useCookieConsent();

  if (isLoading || !showConsent) return null;

  return (
    <Overlay>
      <Container>
        <Content>
          <StyledTitle as="h3" level="h3">
            {consent.title}
          </StyledTitle>
          <Description>
            {consent.description}
            <CustomLink href={ROUTES.COOKIE_POLICY} variant="underline">
              {consent.privacyPolicyLink}
            </CustomLink>
            .
          </Description>
        </Content>

        <ButtonsContainer>
          <ActionButton variant="primary" size="medium" onClick={acceptCookies}>
            {consent.acceptButton}
          </ActionButton>
          <ActionButton variant="outline" size="medium" onClick={acceptCookies}>
            {consent.rejectButton}
          </ActionButton>
        </ButtonsContainer>
      </Container>
    </Overlay>
  );
};
