import { createContext, useContext, useEffect, useState } from "react";
import { getAPI, postAPI } from "./services/Api";


const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const getCurrentUser = async () => {
    setLoading(true);
    try {
      const data = await getAPI("/me");
      setUser(data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      await postAPI("/auth/signin", { email, password });
      await getCurrentUser();

      return true;
    } catch {
      return false;
    }
  };

  const signup = async (email, password) => {
    try {
      await postAPI("/auth/signup", { email, password });
      await getCurrentUser();
      navigate('/home');
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
