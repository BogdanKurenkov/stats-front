import { FAQ, ReviewsHero } from '@/widgets';
import { Seo } from '@/shared';

export default function Reviews() {
  return (
    <>
      <Seo title="Отзывы" />
      <ReviewsHero />
      <FAQ />
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await import(`../../../public/locales/${locale}/common.json`);

  return {
    props: {
      messages: messages.default,
    },
  };
}