import dynamic from "next/dynamic";
import type { FC } from "react";

import { Header, Footer } from "@/widgets";

const CookieConsent = dynamic(() =>
  import("@/widgets").then((mod) => mod.CookieConsent),
);

import { YandexMetrika } from "@/shared";

import type { MainLayoutProps } from "./MainLayout.types";

import { LayoutContainer, MainContent } from "./MainLayout.styled";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <YandexMetrika />
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
      <CookieConsent />
    </LayoutContainer>
  );
};
