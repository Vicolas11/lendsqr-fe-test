import MobileDashSideBar from "../components/MobileDashSideBar";
import { useAppSelector } from "../hooks/store.hook";
import LogoutModal from "../components/LogoutModal";
import DashSideBar from "../components/DashSideBar";
import DashHeader from "../components/DashHeader";
import DashMain from "../components/DashMain";
import { useEffect } from "react";
import "../styles/Dashboard.css";

const Dashboard = (): JSX.Element => {
  const sideBarModal = useAppSelector((state) => state.global.sideBarModal);
  const logoutModal = useAppSelector((state) => state.global.logoutModal);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div>
      <DashHeader />
      {logoutModal && <LogoutModal show={logoutModal} />}
      <MobileDashSideBar show={sideBarModal} />
      <div className="dashboard_inner_wrapper">
        <DashSideBar />
        <DashMain />
      </div>
    </div>
  );
};

export default Dashboard;
