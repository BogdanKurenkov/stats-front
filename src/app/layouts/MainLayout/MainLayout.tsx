import { ReactNode } from 'react';
import { Header, Footer, CookieConsent } from '@/widgets';
import { LayoutContainer, MainContent } from './MainLayout.styled';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
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