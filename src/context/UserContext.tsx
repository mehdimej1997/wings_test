import { createContext, useEffect, useState } from "react";

const UserContext = createContext<any>({ isLoggedIn: false });

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<any>(
    JSON.parse(localStorage.getItem("user") as string)
  );

  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
