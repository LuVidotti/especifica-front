import React, { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const AuthenticationContext = createContext();

export const useAuthentication = () => useContext(AuthenticationContext);

export const AuthenticationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial state

  const login = async (credentials) => {
    const { username, password } = credentials;
    const urlWithParams = `https://utf-api.tashima.space/Login/Authenticate?username=${encodeURIComponent(
      username
    )}&password=${encodeURIComponent(password)}`;

    try {
      const response = await fetch(urlWithParams, {
        method: "POST",
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        return;
      }

      const responseBody = await response.text();

      let expires = "";
      const date = new Date();
      date.setDate(date.getDate() + 7);
      expires = "; expires=" + date.toUTCString();

      const token = responseBody;
      const decodedToken = jwtDecode(token);

      document.cookie = `token=${responseBody}${expires}; path=/`;
      document.cookie = `username=${decodedToken.unique_name}${expires}; path=/`;

      setIsAuthenticated(true);
    } catch (error) {
      console.error("An unexpected error occurred during login:", error);
    }
  };

  const logout = (navigate) => {
    Cookies.remove("username");
    Cookies.remove("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
