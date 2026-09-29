import { type NextPage } from "next";

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

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadLegalMessages(locale);

  return {
    props: { messages },
  };
}
