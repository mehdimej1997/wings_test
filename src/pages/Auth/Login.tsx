import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props: any) => {
  const navigation = useNavigate();
  const { auth, setAuth } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    let user = { isLoggedIn: true, ...data };
    setAuth(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigation("/posts");
  };

  useEffect(() => {
    if (auth?.isLoggedIn) {
      navigation("home");
    }
  }, [auth?.isLoggedIn, navigation]);

  return (
    <div className="login_page">
      <form onSubmit={handleSubmit(onSubmit)} className="login_card">
        <h2>Login</h2>
        <div className="inputs_container">
          <div className="input_container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input"
              placeholder="email@example.com"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email",
                },
              })}
            />
            {errors.email && (
              <span className="error">{`${errors.email.message}`}</span>
            )}
          </div>
          <div className="input_container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input"
              placeholder="password"
              {...register("password", {
                required: true,
                minLength: { value: 8, message: "Invalid password" },
              })}
            />
            {errors.password && (
              <span className="error">{`${errors.password.message}`}</span>
            )}
          </div>
        </div>
        <Button type="submit" className="font-bold text-large" text="Login" />
      </form>
    </div>
  );
};

export default Login;
