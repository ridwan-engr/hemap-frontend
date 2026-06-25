import {
  createContext,
  useContext,
  useState
} from "react";

const AuthContext =
  createContext();

export function AuthProvider({
  children
}) {

  const [user, setUser] =
    useState(null);

  const login = (userData, token) => {

    localStorage.setItem(
      "token",
      token
    );

    setUser(userData);

  };

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    setUser(null);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuth() {

  const context =
    useContext(AuthContext);

  if (!context) {

    throw new Error(
      "useAuth must be used inside AuthProvider."
    );

  }

  return context;

}