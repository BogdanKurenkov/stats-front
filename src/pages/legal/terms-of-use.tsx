import { GetStaticProps, NextPage } from "next";

import { TermsOfUse } from "@/widgets";

import { loadLegalMessages } from "@/shared/lib/localization/loadLegalMessages";
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = loadLegalMessages(locale);

  return {
    props: { messages },
  };
};
