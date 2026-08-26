import { GetServerSideProps } from 'next';

import { BonusesList } from '@/widgets';

import { NextPageWithLayout } from '@/shared/types';
import { SEO } from '@/shared';

const AdminDashboardPartners: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="Прогнозы" noIndex={true} />
      <BonusesList isAdmin />
    </>
  );
};


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { locale } = ctx;

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
      headers: {
        cookie: ctx.req.headers.cookie || '',
      },
    });

    const session = await res.json();
    const isAdmin = session.user?.role === 'admin';

    if (!isAdmin) {
      return {
        notFound: true,
      };
    }

    const messages = await import(`../../../../public/locales/${locale}/common.json`);

    return {
      props: {
        messages: messages.default,
      },
    };
  } catch (error) {
    // TODO убрать временный костыль
    const { locale } = ctx;
    const messages = await import(`../../../../public/locales/${locale}/common.json`);

    return {
      props: {
        messages: messages.default,
      },
      // notFound: true,
    };
  }
};

AdminDashboardPartners.layout = "admin"

export default AdminDashboardPartners