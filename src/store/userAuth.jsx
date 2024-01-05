/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const storeTokenInLS = (token) => {
    return localStorage.setItem("token",token);
  };
  return (
    <AuthContext.Provider value={{ storeTokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
  
    if (!authContextValue) {
      throw new Error("useAuth used outside of the provider");
    }
  
    return authContextValue;
  };
  