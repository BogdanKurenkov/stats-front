import type { GetServerSideProps } from 'next';

import { ForecastsList } from '@/widgets';

import type { NextPageWithLayout } from '@/shared/types';
import { Seo } from '@/shared';

const BONUSES_TEXT = "Текущие прогнозы"

const AdminDashboardForecasts: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="Прогнозы" noIndex={true} />
      <ForecastsList text={BONUSES_TEXT} isAdmin />
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
  } catch {
    return {
      props: {},
      // notFound: true,
    };
  }
};

AdminDashboardForecasts.layout = "admin"

export default AdminDashboardForecasts;