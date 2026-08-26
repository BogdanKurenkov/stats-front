import { GetServerSideProps } from 'next';

import { NextPageWithLayout } from '@/shared/types';
import { SEO } from '@/shared';

const AdminDashboardForecast: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="Прогнозы" noIndex={true} />
      <h1>админка прогнозы деталка</h1>
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

AdminDashboardForecast.layout = "admin"

export default AdminDashboardForecast;