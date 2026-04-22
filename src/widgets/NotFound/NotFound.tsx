import { NextPage } from 'next';

import { ROUTES } from '@/shared/config';
import { CustomLink } from '@/shared';

import { ErrorWrapper, ErrorCode, ErrorDescription, ErrorImage, ErrorTitle, HomeButton } from './NotFound.styled';

export const NotFound: NextPage = () => {
  return (
    <ErrorWrapper>
      <ErrorImage>🕵️‍♂️</ErrorImage>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Страница не найдена</ErrorTitle>
      <ErrorDescription>
        Возможно, она была перемещена, или вы указали неверный адрес.
      </ErrorDescription>

      <HomeButton
        as={CustomLink}
        href={ROUTES.HOME}
        variant="primary"
        size="large"
      >
        На главную
      </HomeButton>
    </ErrorWrapper>
  );
};