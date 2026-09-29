import { type NextPage } from "next";

import { CookiePolicy } from "@/widgets";

import { Seo } from "@/shared";
import { loadLegalMessages } from "@/shared/lib/localization";

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

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadLegalMessages(locale);

  return {
    props: { messages },
  };
}
