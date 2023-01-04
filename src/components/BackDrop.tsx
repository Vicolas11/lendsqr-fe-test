import { hideLogoutModal, hideSideBarModal } from "../store/slice/global.slice";
import { BackDropProps } from "../../interfaces/backdrop.interface";
import { CSSTransition } from "react-transition-group";
import { useAppDispatch } from "../hooks/store.hook";
import animate from "../styles/Animation.module.css";
import "../styles/Dashboard.css";
import { useRef } from "react";

const BackBlurDrop = ({ show, exit = 1000 }: BackDropProps) => {
  const nodeRef = useRef<any>(null);
  const dispatch = useAppDispatch();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={{ enter: 400, exit }}
      classNames={{
        enter: "",
        enterActive: animate.fadeEnterActive,
        exit: "",
        exitActive: animate.fadeExitActive,
      }}
    >
      <div
        onClick={() => {
          dispatch(hideLogoutModal());
          dispatch(hideSideBarModal());
        }}
        ref={nodeRef}
        className="backDrop"
      ></div>
    </CSSTransition>
  );
};

export default BackBlurDrop;
