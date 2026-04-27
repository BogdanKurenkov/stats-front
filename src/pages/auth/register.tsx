import { RegisterForm } from '@/features/auth/RegisterForm';

import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';

const RegisterPage: NextPageWithLayout = () => {
  return <>
    <SEO title="Регистрация" />
    <RegisterForm />
  </>
};

RegisterPage.layout = 'auth';

export default RegisterPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await import(`../../../public/locales/${locale}/common.json`);

  return {
    props: {
      messages: messages.default,
    },
  };
}