import { hideLogoutModal } from "../store/slice/global.slice";
import { useAppDispatch } from "../hooks/store.hook";
import { RiShutDownLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import BackBlurDrop from "./BackDrop";
import { Fragment } from "react";

const LogoutModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <BackBlurDrop show={true} exit={1000} />
      <div className="logout_modal">
        <span className="modal_header">
          <div className="close" onClick={() => dispatch(hideLogoutModal())}>
            <MdClose className="w-8 h-8 md:h-10 pl-2 text-[#213F7D]" />
          </div>
          <div className="logo">
            <img src="../assets/svg/logo.svg" alt="Logo" />
          </div>
        </span>
        <div className="avatar">
          <img src={"../assets/img/avatar.png"} alt="avatar" />
          <div className="profile_name">
            <h3>Adedeji Paul</h3>
            <p>adedeji@email.com</p>
          </div>
        </div>
        <div className="docs">
            <SlDocs className="w-6 h-6 md:h-8 p-0" />
            <h1>Docs</h1>
        </div>
        <div className="bell">
            <BsBell className="w-6 h-6 md:h-8 p-0" />
            <h1>Notifications</h1>
        </div>
        <div className="logout">
          <Link to={"/"}>
              <RiShutDownLine className="w-6 h-6 md:h-8 p-0" />
              <h1>Logout</h1>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LogoutModal;
