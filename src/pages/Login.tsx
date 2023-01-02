import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/LoginPage.css";

const LoginPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="login_page_wrapper">
      <div className="logo">
        <Link to={"/login"}>
          <img src="../assets/svg/logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="main_wrapper">
        <div className="svg_wrapper">
          <img src="../assets/svg/pablo-sign-in.svg" alt="PabloSignIn" />
        </div>
        <div className="login_form_wrapper">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
