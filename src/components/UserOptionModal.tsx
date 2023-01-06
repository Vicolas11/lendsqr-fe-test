const UserOptionModal = (): JSX.Element => {
  return (
    <div className="user_option_modal">
      <div>
        <div>
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
};

export default UserOptionModal;
