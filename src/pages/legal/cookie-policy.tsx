import { type NextPage } from "next";

import { CookiePolicy } from "@/widgets";

import { Seo } from "@/shared";
import { loadMessages } from "@/shared/lib/localization";

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
  const messages = await loadMessages(locale);

  return {
    props: { messages },
  };
}
