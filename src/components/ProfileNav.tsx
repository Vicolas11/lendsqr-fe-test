import styles from "../styles/UserProfile.module.scss";
import { Link } from "react-router-dom";

const ProfileNav = (): JSX.Element => {
  return (
    <div className={styles.profile_nav_wrapper}>
      <div className={styles.back_to_users}>
        <Link to="/dashboard">
          <img src="../assets/svg/back-arrow.svg" alt="backarrow" />
        </Link>
        <h2>Back to Users</h2>
      </div>
      <div className={styles.inner_wrapper}>
        <h1>User Details</h1>
        <div className={styles.btn_wrapper}>
          <button className={styles.blacklist_btn}>Blacklist user</button>
          <button className={styles.activate_btn}>Activate user</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
