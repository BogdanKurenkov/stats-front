import { LoginForm } from '@/features/auth/LoginForm';

import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';

const LoginPage: NextPageWithLayout = () => {
  return <>
    <SEO title="Авторизация" />
    <LoginForm />;
  </>
};

LoginPage.layout = 'auth';

export default LoginPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await import(`../../../public/locales/${locale}/common.json`);

  return {
    props: {
      messages: messages.default,
    },
  };
}