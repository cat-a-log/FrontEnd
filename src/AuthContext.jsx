import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const getCurrentUser = async () => {
    setLoading (true);
    try {
        const response = await fetch ("http://localhost:8080/api/me")
        if (response.ok) {
            const data = await response.json()
            setUser (data);
        } else {
            setUser (null);
        }
    } catch (error) {
        setUser (null);
    } finally {
        setLoading (false);
    }

  };

  useEffect(() => {
    getCurrentUser ();
  }, [])
  return <AuthContext.Provider value = {{user, loading}}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};

