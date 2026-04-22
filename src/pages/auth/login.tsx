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