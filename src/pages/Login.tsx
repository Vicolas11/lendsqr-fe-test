import styles from "../styles/LoginPage.module.scss";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className={styles.login_page_wrapper}>
      <div className={styles.logo}>
        <Link to={"/login"}>
          <img src="../assets/svg/logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className={styles.main_wrapper}>
        <div className={styles.svg_wrapper}>
          <img src="../assets/svg/pablo-sign-in.svg" alt="pablosignin" />
        </div>
        <div className={styles.login_form_wrapper}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
