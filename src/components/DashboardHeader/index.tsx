import { Link, useSearchParams } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import styles from "./styles.module.scss";
import Logout from "../Logout";
import {
  avatar,
  searchIcon,
  lendsqrLogo,
  dropDownArrowIcon,
  bellImgIcon,
} from "../../assets";

export default function DashboardHeader(): JSX.Element {
  const setSearchParam = useSearchParams()[1];

  return (
    <header className={styles.dashHeaderWrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.logo}>
          <Link to={"/dashboard"}>
            <img src={lendsqrLogo} alt="logo" />
          </Link>
        </div>
        <div className={styles.searchWrapper}>
          <button
            className={styles.hamburger}
            onClick={() => setSearchParam({ sidebar: "true" })}
          >
            <HiOutlineMenuAlt2 className={styles.icon} />
          </button>
          <input type="text" placeholder="Search for anything" />
          <div>
            <img src={searchIcon} alt="Search" />
          </div>
        </div>
      </div>

      <div className={styles.rightWrapper}>
        <span className={styles.docs}>
          <h1>Docs</h1>
        </span>
        <span className={styles.bell}>
          <img src={bellImgIcon} alt="bell" />
        </span>
        {/* Mobile Screen */}
        <span
          className={styles.mobileAvatar}
          onClick={() => setSearchParam({ modal: "true" })}
        >
          <img src={avatar} alt="avatar" />
        </span>
        {/* Larger Screen */}
        <span className={styles.avatar}>
          <img className={styles.avatarImg} src={avatar} alt="avatar" />
          <div className={styles.profileName}>
            <h3>Adedeji</h3>
            <img
              className={styles.dropDownArrowIcon}
              src={dropDownArrowIcon}
              alt="DropDownArrow"
            />
          </div>
          <Logout />
        </span>
      </div>
    </header>
  );
}
