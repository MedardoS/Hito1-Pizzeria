import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  // Simulamos un login con token = true
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  const login = () => {
    setToken(true);
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
