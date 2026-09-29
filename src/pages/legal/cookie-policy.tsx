import { GetStaticProps, NextPage } from "next";

import { CookiePolicy } from "@/widgets";

import { Seo } from "@/shared";
import { loadLegalMessages } from "@/shared/lib/localization/loadLegalMessages";

const CookiePolicyPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Политика использования cookies"
        description="Информация о cookies на сайте Stats.net"
      />
      <CookiePolicy />
    </>
  );
};

export default CookiePolicyPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = loadLegalMessages(locale);

  return {
    props: { messages },
  };
};
