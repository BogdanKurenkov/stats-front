import type { FC } from 'react';

import { Header, Footer, CookieConsent } from '@/widgets';

import { MainLayoutProps } from './MainLayout.types';

import { LayoutContainer, MainContent } from './MainLayout.styled';

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
      <CookieConsent />
    </LayoutContainer>
  );
};