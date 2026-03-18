import { RegisterForm } from '@/features/auth/RegisterForm';
import { NextPageWithLayout } from '@/shared/types';

const RegisterPage: NextPageWithLayout = () => {
  return <RegisterForm />;
};

RegisterPage.layout = 'auth';

export default RegisterPage;