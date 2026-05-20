import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAdmin } from '@/application/contexts';

import { Footer, Header } from '@/widgets';

import { AdminContainer, AdminContent } from './AdminLayout.styled';

// import { GlobalSpinner } from '@/shared/ui/GlobalSpinner/GlobalSpinner';

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { isAdmin, isLoading } = useAdmin();

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      // router.push('/');
    }
  }, [isAdmin, isLoading, router]);

  if (isLoading) {
    // return <GlobalSpinner />
  }

  if (!isAdmin) {
    // return null;
  }

  return <AdminContainer>
    <Header />
    <AdminContent>
      {children}
    </AdminContent>
    <Footer />
  </AdminContainer>;
};