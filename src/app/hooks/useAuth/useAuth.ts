import { useAuthContext } from "./useAuthContext";

export const useAuth = () => {
  const { user, isLoading, login, register, logout, hasRole } =
    useAuthContext();
  return { user, isLoading, login, register, logout, hasRole };
};
