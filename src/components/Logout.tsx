import styles from "../styles/Dashboard.module.scss";
import { useNavigate } from "react-router-dom";

const Logout = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.desktop_logout}
      onClick={() => navigate("/", { replace: true })}
    >
      <img src={"../assets/svg/sign-out.svg"} alt="signout" />
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
