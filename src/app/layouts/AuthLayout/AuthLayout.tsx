import { ReactNode } from 'react';
import { Container } from '@/shared/ui';
import { AuthWrapper } from './AuthLayout.styled';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <AuthWrapper>
      <Container> 
        {children}
      </Container>
    </AuthWrapper>
  );
};