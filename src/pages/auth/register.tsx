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