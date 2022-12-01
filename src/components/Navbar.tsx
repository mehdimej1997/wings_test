import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Button from "./Button";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const { auth, setAuth } = useContext(UserContext);
  const navigation = useNavigate();
  const authHandler = () => {
    if (auth?.isLoggedIn) {
      const user = { isLoggedIn: false, email: "", password: "" };
      setAuth(() => {
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      });

      navigation("/");
    } else {
      navigation("/");
    }
  };
  return (
    <nav className="navbar_container ">
      <div className="container navbar">
        <h1>Logo</h1>
        <ul className="flex">
          <li className="">
            <CustomLink to={"/home"} text="Home" />
          </li>
          {auth?.isLoggedIn ? (
            <li className="">
              <CustomLink to={"/posts"} text="Posts" />
            </li>
          ) : null}
          <li className="">
            <Button
              onClick={authHandler}
              text={auth?.isLoggedIn ? "LogOut" : "Login"}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
