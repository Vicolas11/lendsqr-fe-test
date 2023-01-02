import LoginForm from "../components/LoginForm";
import "../styles/LoginPage.css";

const LoginPage = (): JSX.Element => {
  return (
    <div className="login_page_wrapper">
      <div className="logo">
        <img src="../assets/svg/logo.svg" alt="Logo" />
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
