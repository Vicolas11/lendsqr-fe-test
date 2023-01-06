import { hideSideBarModal } from "../store/slice/global.slice";
import { ModalProps } from "../../interfaces/modal.interface";
import { CSSTransition } from "react-transition-group";
import styles from "../styles/Dashboard.module.scss";
import { useAppDispatch } from "../hooks/store.hook";
import animate from "../styles/Animation.module.css";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import BackBlurDrop from "./BackDrop";
import Businesses from "./Businesses";
import Customers from "./Customers";
import Settings from "./Settings";

const MobileDashSideBar = ({ show }: ModalProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const nodeRef = useRef(null);

  return (
    <Fragment>
      <BackBlurDrop show={show} exit={1000} />
      <CSSTransition
        in={show}
        key={"enter"}
        nodeRef={nodeRef}
        timeout={400}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: animate.slideEnterActive,
          exitActive: animate.slideExitActive,
        }}
      >
        <aside className={styles.mobile_dash_sidebar_wrapper} ref={nodeRef}>
          <div
            className={styles.close}
            onClick={() => dispatch(hideSideBarModal())}
          >
            <MdClose className="w-8 h-8 md:h-10 pl-2 text-[#213F7D]" />
          </div>
          <div className={styles.logo}>
            <Link to={"/"}>
              <img src="../assets/svg/logo.svg" alt="Logo" />
            </Link>
          </div>
          <span className={styles.switch_organisation}>
            <span>
              <img src="../assets/svg/briefcase.svg" alt="Briefcase" />
            </span>
            <span className={styles.text}>
              <h3>Switch Organization</h3>
              <img src="../assets/svg/dropdown.svg" alt="DropDown" />
            </span>
          </span>
          <div className={styles.dashboard}>
            <span>
              <img src="../assets/svg/home.svg" alt="home" />
            </span>
            <h3>Dashboard</h3>
          </div>
          <Customers />
          <Businesses />
          <Settings />
          <div
            className={styles.logout}
            onClick={() => navigate("/", { replace: true })}
          >
            <span>
              <img src="../assets/svg/sign-out.svg" alt="signout" />
            </span>
            <h3>Logout</h3>
          </div>
          <h2 className={styles.version}>v1.2.0</h2>
        </aside>
      </CSSTransition>
    </Fragment>
  );
};

export default MobileDashSideBar;
