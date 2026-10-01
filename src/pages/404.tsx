import type { NextPage } from "next";

import { NotFound } from "@/widgets";

import { Container, loadMessages } from "@/shared";

const Custom404: NextPage = () => {
  return (
    <Container>
      <NotFound />
    </Container>
  );
};

export default Custom404;

export async function getStaticProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
