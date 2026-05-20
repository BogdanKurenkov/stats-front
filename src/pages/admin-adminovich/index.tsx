import { GetServerSideProps } from 'next';

import { Header } from '@/widgets';

import { NextPageWithLayout } from '@/shared/types';
import { SEO } from '@/shared';

const AdminDashboard: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="Прогнозы" noIndex={true} />
      <h1>админка</h1>
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

    console.log(123)

    const session = await res.json();
    // const isAdmin = session.user?.role === 'admin';
    const isAdmin = true;

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

AdminDashboard.layout = "admin"

export default AdminDashboard;