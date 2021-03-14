import { createContext, FC, useContext, useState } from 'react';
import { authService } from '../services';

interface AuthContext {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  token: string | undefined;
}

export const authContext = createContext<AuthContext>({
  login: async () => {
    return false;
  },
  logout: () => {},
  token: undefined,
});

export const AuthProvider: FC = ({ children }) => {
  const [token, setToken] = useState<string>('auth');
  const login = async (email: string, password: string) => {
    return true;
  };
  const logout = () => {};
  return <authContext.Provider value={{ token, login, logout }}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};
