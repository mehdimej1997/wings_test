import { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext";
import Login from "./pages/Auth/Login";

const ProtectedRoutes = () => {
  const { auth } = useContext(UserContext);

  return auth?.isLoggedIn ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
