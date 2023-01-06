import styles from "../styles/PageNotFound.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PageNotFound = (): JSX.Element => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <div className={styles.page_not_found}>
      <img src="../assets/img/not-found.png" alt="Page not found Logo" />
      <h1>Page Not Found!</h1>
      <p>
        We're sorry, the page you required could not be found.
        <br />
        Please go back to the login page.
      </p>
      <button>
        <Link to={`/login`}>Goto Login</Link>
      </button>
    </div>
  );
};

export default PageNotFound;
