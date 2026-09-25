import type { FC } from 'react';

import { YandexMetrika } from '@/shared';
import { Container } from '@/shared';

import { AuthLayoutProps } from './AuthLayout.types';

import { AuthWrapper } from './AuthLayout.styled';

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <AuthWrapper>
      <YandexMetrika />
      <Container>
        {children}
      </Container>
    </AuthWrapper>
  );
};