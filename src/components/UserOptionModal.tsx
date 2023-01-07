import { hideUserOption } from "../store/slice/global.slice";
import styles from "../styles/Dashboard.module.scss";
import { useAppDispatch } from "../hooks/store.hook";
import { useNavigate } from "react-router-dom";
import { forwardRef, Ref } from "react";

const UserOptionModal = forwardRef(
  (_, ref: Ref<HTMLDivElement>): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onClickHandler = () => {
      navigate("/profile");
      dispatch(hideUserOption());
    };

    return (
      <div className={styles.user_option_modal} ref={ref}>
        <div>
          <div onClick={onClickHandler.bind(this)}>
            <span>
              <img src="../assets/svg/eye.svg" alt="eye" />
            </span>
            <p>View Details</p>
          </div>
          <div>
            <span>
              <img src="../assets/img/user-delete.png" alt="user-delete" />
            </span>
            <p>Blacklist User</p>
          </div>
          <div>
            <span>
              <img src="../assets/img/user-activate.png" alt="user-activate" />
            </span>
            <p>Activate User</p>
          </div>
        </div>
      </div>
    );
  }
);

export default UserOptionModal;
