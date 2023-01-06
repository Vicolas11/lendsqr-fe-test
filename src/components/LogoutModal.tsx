import { hideLogoutModal } from "../store/slice/global.slice";
import { ModalProps } from "../../interfaces/modal.interface";
import { useAppDispatch } from "../hooks/store.hook";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { Fragment, useRef } from "react";
import { SlDocs } from "react-icons/sl";
import { BsBell } from "react-icons/bs";
import BackBlurDrop from "./BackDrop";

const LogoutModal = ({ show }: ModalProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const nodeRef = useRef(null);

  return (
    <Fragment>
      <BackBlurDrop show={show} exit={1000} />

      <div className="logout_modal" ref={nodeRef}>
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
          <SlDocs className="w-5 h-5 md:h-8 p-0" />
          <h1>Docs</h1>
        </div>
        <div className="bell">
          <BsBell className="w-5 h-5 md:h-8 p-0" />
          <h1>Notifications</h1>
        </div>
        <div
          className="logout"
          onClick={() => navigate("/", { replace: true })}
        >
          <img src={"../assets/svg/sign-out.svg"} alt="signout" />
          <h1>Logout</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default LogoutModal;
