import { RegisterForm } from '@/features/auth/RegisterForm';

import { Seo, NextPageWithLayout } from '@/shared';

const RegisterPage: NextPageWithLayout = () => {
  return <>
    <Seo title="Регистрация" />
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