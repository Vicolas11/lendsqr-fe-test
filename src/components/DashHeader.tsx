import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

const DashHeader = (): JSX.Element => {
  return (
    <header className="dash_header_wrapper">
      <div className="left_wrapper">
        <div className="logo">
          <Link to={"/login"}>
            <img src="../assets/svg/logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className="search_wrapper">
          <button className="hamburger">
            <HiOutlineMenuAlt2 className="w-8 h-8 md:h-10 p-0" />
          </button>
          <input type="text" placeholder="Search for anything" />
          <div>
            <img src="../assets/svg/search.svg" alt="Search" />
          </div>
        </div>
      </div>

      <div className="right_wrapper">
        <span className="docs">
          <h1>Docs</h1>
        </span>
        <span className="bell">
          <img src="../assets/svg/bell.svg" alt="Bell" />
        </span>
        <span className="avatar">
          <img src={"../assets/img/avatar.png"} alt="avatar" />
          <div className="profile_name">
            <h3>Adedeji</h3>
            <img src="../assets/svg/dropdownarrow.svg" alt="DropDownArrow" />
          </div>
        </span>
      </div>
    </header>
  );
};

export default DashHeader;
