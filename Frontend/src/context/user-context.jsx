import React from "react";
import { useContext, useEffect, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuthUser = async () => {
    try {
      const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;

      if (!user) {
        navigate("/login");
        setUser(null);
        setIsLoggedIn(false);
        return false;
      }
      setIsLoggedIn(true);
      setUser(user);
      return true;
    } catch (error) {
      console.error("Error checking authentication:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const userFallback = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;

    console.log(userFallback);
    if (!userFallback) {
      navigate("/login");
    }

    checkAuthUser();
  }, []);

  const value = {
    user,
    setUser,
    logout,
    checkAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserContext = () => useContext(UserContext);
