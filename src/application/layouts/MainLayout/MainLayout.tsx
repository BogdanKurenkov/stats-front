import { ReactNode, useEffect } from 'react';

import { Header, Footer, CookieConsent } from '@/widgets';

import { LayoutContainer, MainContent } from './MainLayout.styled';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  useEffect(() => {
    console.log = () => { };
    console.warn = () => { };
    console.error = () => { };
    console.debug = () => { };
    console.info = () => { };

    window.onerror = () => true;
    window.onunhandledrejection = () => { };

    if (window.reportError) {
      window.reportError = () => { };
    }
  }, []);

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