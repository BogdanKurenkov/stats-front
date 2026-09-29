import { type NextPage } from "next";

import { TermsOfUse } from "@/widgets";

import { loadLegalMessages } from "@/shared/lib/localization";
import { Seo } from "@/shared";

const TermsOfUsePage: NextPage = () => {
  return (
    <>
      <Seo
        title="Пользовательское соглашение"
        description="Условия использования сайта Stats.net"
      />
      <TermsOfUse />
    </>
  );
};

export default TermsOfUsePage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadLegalMessages(locale);

  return {
    props: { messages },
  };
}
