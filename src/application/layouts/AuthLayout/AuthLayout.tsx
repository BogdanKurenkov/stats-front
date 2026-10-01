import dynamic from "next/dynamic";
import type { FC } from "react";

const CookieConsent = dynamic(() =>
  import("@/widgets").then((mod) => mod.CookieConsent),
);

import { YandexMetrika } from "@/shared/lib/metrics";
import { Container } from "@/shared/ui";

import type { AuthLayoutProps } from "./AuthLayout.types";

import { AuthWrapper } from "./AuthLayout.styled";

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <AuthWrapper>
      <YandexMetrika />
      <Container>{children}</Container>
      <CookieConsent />
    </AuthWrapper>
  );
};
