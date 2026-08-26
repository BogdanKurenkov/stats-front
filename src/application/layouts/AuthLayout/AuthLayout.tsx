import type { FC } from 'react';

import { Container } from '@/shared/ui';

import { AuthLayoutProps } from './AuthLayout.types';

import { AuthWrapper } from './AuthLayout.styled';

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <AuthWrapper>
      <Container>
        {children}
      </Container>
    </AuthWrapper>
  );
};