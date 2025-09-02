import { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  
  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await api.post("/refreshtoken");
        setAccessToken(response.data.accessToken);
      } catch (error) {
        console.error(error.response.data.message || "Failed to refresh token");
        setAccessToken(null);
      }
    };

    refreshToken();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
