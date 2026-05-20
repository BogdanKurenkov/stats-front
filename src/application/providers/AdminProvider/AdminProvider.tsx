import { ReactNode, useState, useEffect } from 'react';

import { AdminContext } from '@/application/contexts';

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        setIsAdmin(data.user?.role === 'admin');
      } catch (error) {
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
};