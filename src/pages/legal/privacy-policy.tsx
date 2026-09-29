import { GetStaticProps, type NextPage } from "next";

import { PrivacyPolicy } from "@/widgets";

import { loadLegalMessages } from "@/shared/lib/localization";
import { Seo } from "@/shared";

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Политика конфиденциальности"
        description="Политика обработки персональных данных на сайте Stats.net"
      />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = loadLegalMessages(locale);

  return {
    props: { messages },
  };
};
