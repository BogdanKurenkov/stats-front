import { GetServerSideProps } from 'next';

import { ForecastsList } from '@/widgets';

import { NextPageWithLayout } from '@/shared/types';
import { SEO } from '@/shared';

const AdminDashboardForecasts: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="Прогнозы" noIndex={true} />
      <ForecastsList />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
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

    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
      // notFound: true,
    };
  }
};

AdminDashboardForecasts.layout = "admin"

export default AdminDashboardForecasts;