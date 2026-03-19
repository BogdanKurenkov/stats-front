import { ROUTES } from '@/shared/config';
import { ErrorWrapper, ErrorCode, ErrorDescription, ErrorImage, ErrorTitle, HomeButton } from './NotFound.styled';
import { NextPage } from 'next';
import { CustomLink } from '@/shared';

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