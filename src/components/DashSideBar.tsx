import { useNavigate } from "react-router-dom";
import Businesses from "./Businesses";
import Customers from "./Customers";
import Settings from "./Settings";

const DashSideBar = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <aside className="dash_sidebar_wrapper">
      <span className="switch_organisation">
        <span>
          <img src="../assets/svg/briefcase.svg" alt="Briefcase" />
        </span>
        <span className="text">
          <h3>Switch Organization</h3>
          <img src="../assets/svg/dropdown.svg" alt="DropDown" />
        </span>
      </span>
      <div className="dashboard">
        <span>
          <img src="../assets/svg/home.svg" alt="home" />
        </span>
        <h3>Dashboard</h3>
      </div>
      <Customers />
      <Businesses />
      <Settings />
      <div className="logout" onClick={() => navigate("/", { replace: true })}>
        <span>
          <img src="../assets/svg/sign-out.svg" alt="signout" />
        </span>
        <h3>Logout</h3>
      </div>
      <h2 className="version">v1.2.0</h2>
    </aside>
  );
};

export default DashSideBar;
