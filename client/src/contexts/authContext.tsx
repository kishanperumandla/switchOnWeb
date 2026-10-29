import { createContext, useContext, useState, type ReactNode } from "react";

export interface LoginData {
  userName: string;
  password: string;
}

interface AuthContextValue {
  loginData: LoginData | null;
  login: (data: LoginData) => void;
  loginSuccess: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [loginData, setLoginData] = useState<LoginData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  function login(data: LoginData) {
    const { userName, password } = data;
    const isAuthMatch = userName === "kishan" && password === "123" ? true : false;
    setIsAuthenticated(isAuthMatch);
    if (isAuthMatch) setLoginData({ userName, password });
  }

  return <AuthContext value={{ loginData, login, loginSuccess: isAuthenticated }}> {children} </AuthContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("🚫 useAuth must be used inside <AuthProvider>");
  return context;
}
