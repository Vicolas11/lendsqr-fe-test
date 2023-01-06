import MobileDashSideBar from "../components/MobileDashSideBar";
import styles from "../styles/UserProfile.module.scss";
import { useAppSelector } from "../hooks/store.hook";
import DashSideBar from "../components/DashSideBar";
import LogoutModal from "../components/LogoutModal";
import UserDetails from "../components/UserDetails";
import DashHeader from "../components/DashHeader";
import { Fragment, useEffect } from "react";

const UserProfile = (): JSX.Element => {
  const sideBarModal = useAppSelector((state) => state.global.sideBarModal);
  const logoutModal = useAppSelector((state) => state.global.logoutModal);

  useEffect(() => {
    document.title = "User Profile";
  }, []);

  return (
    <Fragment>
      <DashHeader />
      {logoutModal && <LogoutModal show={logoutModal} />}
      <MobileDashSideBar show={sideBarModal} />
      <div className={styles.userprofile_inner_wrapper}>
        <DashSideBar />
        <UserDetails />
      </div>
    </Fragment>
  );
};

export default UserProfile;
