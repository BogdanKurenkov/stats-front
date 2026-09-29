import type { GetServerSideProps } from 'next';

import { PartnersForm } from '@/widgets';

import { Seo } from '@/shared';
import type { NextPageWithLayout } from '@/shared/types';

const AdminDashboardPartner: NextPageWithLayout = () => {
  return (
    <>
      <Seo title={'Редактирование партнера'} noIndex={true} />
      <PartnersForm />
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
    };
  }
};

AdminDashboardPartner.layout = "admin";

export default AdminDashboardPartner;