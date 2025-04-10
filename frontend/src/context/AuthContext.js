import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userToken");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("userToken", JSON.stringify(token));
    setUser(token);
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
