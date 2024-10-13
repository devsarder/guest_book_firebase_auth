// src/contexts/AuthContext.js
import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/firebase_auth/firebase";

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    if (user || error) {
      setAuthLoading(false);
    }
  }, [error, user]);

  const value = {
    user,
    loading: authLoading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
