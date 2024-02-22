import React, { createContext, useState ,useContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
const [token, setToken] = useState(localStorage.getItem("token") || null);

const [user, setUser] = useState([
  localStorage.getItem("username") || "Anonymous User",
  localStorage.getItem("occupation") || "Anonymous Occupation",
  localStorage.getItem("email") || "Anonymous Email",
  localStorage.getItem("id") || "Anonymous User",
]);

// const [user, setUser] = useState('');

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
    const loginUser = (user) => {
      setUser(user);
      localStorage.setItem("id", user.id);
      localStorage.setItem("username", user.username);
      localStorage.setItem("occupation", user.occupation);
      localStorage.setItem("email", user.email);
    };


    const logout = () => {
      setToken(null);
      localStorage.removeItem("token");
      localStorage.clear();
    };

    return (
      <AuthContext.Provider
        value={{
          token,
          login,
          logout,
          loginUser,
          user,
        }}
      >
        {children}
      </AuthContext.Provider>
    );

}

export default AuthProvider;

export const useGlobalContext = () => {
  return useContext(AuthContext);
};