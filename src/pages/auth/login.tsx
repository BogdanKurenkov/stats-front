import { LoginForm } from '@/features/auth/LoginForm';
import { NextPageWithLayout } from '@/shared/types';

const LoginPage: NextPageWithLayout = () => {
  return <LoginForm />;
};

LoginPage.layout = 'auth';

export default LoginPage;