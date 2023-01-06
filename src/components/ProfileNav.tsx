import { Link } from "react-router-dom";

const ProfileNav = (): JSX.Element => {
  return (
    <div className="profile_nav_wrapper">
      <div className="back_to_users">
        <Link to="/dashboard">
          <img src="../assets/svg/back-arrow.svg" alt="backarrow" />
        </Link>
        <h2>Back to Users</h2>
      </div>
      <div className="inner_wrapper">
        <h1>User Details</h1>
        <div className="btn_wrapper">
          <button className="blacklist_btn">Blacklist user</button>
          <button className="activate_btn">Activate user</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
