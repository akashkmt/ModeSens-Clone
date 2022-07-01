import React from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
