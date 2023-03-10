import MobileDashSideBar from "../components/MobileDashSideBar";
import styles from "../styles/Dashboard.module.scss";
import { useAppSelector } from "../hooks/store.hook";
import LogoutModal from "../components/LogoutModal";
import DashSideBar from "../components/DashSideBar";
import DashHeader from "../components/DashHeader";
import DashMain from "../components/DashMain";
import { Fragment, useEffect } from "react";

const Dashboard = (): JSX.Element => {
  const sideBarModal = useAppSelector((state) => state.global.sideBarModal);
  const logoutModal = useAppSelector((state) => state.global.logoutModal);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <Fragment>
      <DashHeader />
      {logoutModal && <LogoutModal show={logoutModal} />}
      <MobileDashSideBar show={sideBarModal} />
      <div className={styles.dashboard_inner_wrapper}>
        <DashSideBar />
        <DashMain />
      </div>
    </Fragment>
  );
};

export default Dashboard;
