const GeneralDetails = (): JSX.Element => {
  return (
    <div className="general_details_wrapper">
      <div className="upper">
        <div className="profile_name">
          <span>
            <img src="../assets/svg/profile-avatar.svg" alt="avatar" />
          </span>
          <span className="full_name">
            <h1>Grace Effiom</h1>
            <p>LSQFf587g9O</p>
          </span>
        </div>
        {/* <div className="vertical_line"></div> */}
        <div className="user_tier">
          <h2>User's Tier</h2>
          <span>
            <img src={"../assets/svg/star-fill.svg"} alt="star-fill" />
            <img src={"../assets/svg/star-outline.svg"} alt="star-outline" />
            <img src={"../assets/svg/star-outline.svg"} alt="star-outline" />
          </span>
        </div>
        {/* <div className="vertical_line"></div> */}
        <div className="amount">
          <h1>₦200,000.00</h1>
          <p>991235678/Providus Bank</p>
        </div>
      </div>
      <div className="below">
        <span>
          <h2>General Details</h2>
        </span>
        <span>
          <h2>Documents</h2>
        </span>
        <span>
          <h2>Bank Details</h2>
        </span>
        <span>
          <h2>Loans</h2>
        </span>
        <span>
          <h2>Savings</h2>
        </span>
        <span>
          <h2>App and System</h2>
        </span>
      </div>
    </div>
  );
};

export default GeneralDetails;
