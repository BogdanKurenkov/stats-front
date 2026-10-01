import { RegisterForm } from "@/features/auth/RegisterForm";

import { Seo, type NextPageWithLayout, loadMessages } from "@/shared";

const RegisterPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="Регистрация" />
      <RegisterForm />
    </>
  );
};

RegisterPage.layout = "auth";

export default RegisterPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
