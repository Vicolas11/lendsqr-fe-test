import { BackDropProps } from "../../interfaces/backdrop.interface";
import { hideLogoutModal } from "../store/slice/global.slice";
import { useAppDispatch } from "../hooks/store.hook";
import { CSSTransition } from "react-transition-group";
import "../styles/Animation.css";
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
        enterActive: "fadeEnterActive",
        exit: "",
        exitActive: "fadeExitActive",
      }}
    >
      <div
        onClick={() => dispatch(hideLogoutModal())}
        ref={nodeRef}
        className="backDrop"
      ></div>
    </CSSTransition>
  );
};

export default BackBlurDrop;
