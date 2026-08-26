import { type FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAdmin } from '@/application/contexts';

import { AdminHeader } from '@/widgets';

import { AdminLayoutProps } from './AdminLayout.types';

import { AdminContainer, AdminContent } from './AdminLayout.styled';

// import { GlobalSpinner } from '@/shared/ui/GlobalSpinner/GlobalSpinner';

export const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
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
    <AdminHeader />
    <AdminContent>
      {children}
    </AdminContent>
  </AdminContainer>;
};