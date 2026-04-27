import { NextPage } from 'next';
import { useDictionary } from '@/shared/lib/localization';

import { ROUTES } from '@/shared/config';
import { CustomLink } from '@/shared';

import { ErrorWrapper, ErrorCode, ErrorDescription, ErrorImage, ErrorTitle, HomeButton } from './NotFound.styled';

export const NotFound: NextPage = () => {
  const dict = useDictionary();
  const data = dict.notFound;

  return (
    <ErrorWrapper>
      <ErrorImage>🕵️‍♂️</ErrorImage>
      <ErrorCode>{data.errorCode}</ErrorCode>
      <ErrorTitle>{data.title}</ErrorTitle>
      <ErrorDescription>
        {data.description}
      </ErrorDescription>

      <HomeButton
        as={CustomLink}
        href={ROUTES.HOME}
        variant="primary"
        size="large"
      >
        {data.homeButton}
      </HomeButton>
    </ErrorWrapper>
  );
};