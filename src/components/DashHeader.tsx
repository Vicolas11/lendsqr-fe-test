import { showLogoutModal, showSideBarModal } from "../store/slice/global.slice";
import { useAppDispatch } from "../hooks/store.hook";
import styles from "../styles/Dashboard.module.scss";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const DashHeader = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.dash_header_wrapper}>
      <div className={styles.left_wrapper}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src="../assets/svg/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className={styles.search_wrapper}>
          <button
            className={styles.hamburger}
            onClick={() => dispatch(showSideBarModal())}
          >
            <HiOutlineMenuAlt2 className="w-8 h-8 md:h-10 p-0" />
          </button>
          <input type="text" placeholder="Search for anything" />
          <div>
            <img src="../assets/svg/search.svg" alt="Search" />
          </div>
        </div>
      </div>

      <div className={styles.right_wrapper}>
        <span className={styles.docs}>
          <h1>Docs</h1>
        </span>
        <span className={styles.bell}>
          <img src="../assets/img/bell.png" alt="bell" />
        </span>
        {/* Mobile Screen */}
        <span
          className={styles.mobile_avatar}
          onClick={() => dispatch(showLogoutModal())}
        >
          <img src={"../assets/img/avatar.png"} alt="avatar" />
        </span>
        {/* Larger Screen */}
        <span className={styles.avatar}>
          <img src={"../assets/img/avatar.png"} alt="avatar" />
          <div className={styles.profile_name}>
            <h3>Adedeji</h3>
            <img src="../assets/svg/dropdownarrow.svg" alt="DropDownArrow" />
          </div>
          <Logout />
        </span>
      </div>
    </header>
  );
};

export default DashHeader;
