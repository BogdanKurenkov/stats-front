import { ReactNode, useState, useEffect } from 'react';
import { authApi, User } from '@/shared/api';
import { AuthContext } from '@/app/contexts';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    authApi.getSession()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    const userData = await authApi.login({ email, password });
    setUser(userData);
  };

  const register = async (name: string, email: string, password: string) => {
    const userData = await authApi.register({ name, email, password });
    setUser(userData);
  };

  const logout = async () => {
    await authApi.logout();
    setUser(null);
  };

  const hasRole = (roles: User['role'] | User['role'][]) => {
    if (!user) return false;
    if (user.role === 'admin') return true;

    const rolesArray = Array.isArray(roles) ? roles : [roles];
    return rolesArray.includes(user.role);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
};