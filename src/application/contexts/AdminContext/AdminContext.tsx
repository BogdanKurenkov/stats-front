import { createContext, useContext } from 'react';

export const AdminContext = createContext<{
  isAdmin: boolean;
  isLoading: boolean;
}>({
  isAdmin: false,
  isLoading: true,
});

export const useAdmin = () => useContext(AdminContext);