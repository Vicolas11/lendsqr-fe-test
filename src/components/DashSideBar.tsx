import Businesses from "./Businesses";
import Customers from "./Customers";
import Settings from "./Settings";

const DashSideBar = (): JSX.Element => {
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
    </aside>
  );
};

export default DashSideBar;
