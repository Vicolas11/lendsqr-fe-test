import MobileDashSideBar from "../components/MobileDashSideBar";
import DashSideBar from "../components/DashSideBar";
import LogoutModal from "../components/LogoutModal";
import DashHeader from "../components/DashHeader";
import UserDetails from "../components/UserDetails";
import { useAppSelector } from "../hooks/store.hook";
import { Fragment, useEffect } from "react";
import "../styles/UserProfile.css";

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
      <div className="userprofile_inner_wrapper">
        <DashSideBar />
        <UserDetails />
      </div>
    </Fragment>
  );
};

export default UserProfile;
