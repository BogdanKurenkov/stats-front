import { LoginForm } from '@/features/auth/LoginForm';

import { Seo, NextPageWithLayout, loadMessages } from '@/shared';

const LoginPage: NextPageWithLayout = () => {
  return <>
    <Seo title="Авторизация" />
    <LoginForm />;
  </>
};

LoginPage.layout = 'auth';

export default LoginPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}