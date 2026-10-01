import {
  FAQ,
  ReviewsHero,
  ReviewsMethodology,
  ReviewsRating,
  ReviewsList,
  ReviewsLeaveForm,
} from "@/widgets";

import { loadMessages, Seo } from "@/shared";

export default function Reviews() {
  return (
    <>
      <Seo title="Отзывы" />
      <ReviewsHero />
      <ReviewsMethodology />
      <ReviewsRating />
      <ReviewsList />
      <ReviewsLeaveForm />
      <FAQ />
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
