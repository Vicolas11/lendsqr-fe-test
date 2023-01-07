import styles from "../styles/UserProfile.module.scss";
import { useAppSelector } from "../hooks/store.hook";

const GeneralDetails = (): JSX.Element => {
  const userId = useAppSelector((state) => state.global.userId);
  const userDataArr = useAppSelector((state) => state.userData.data);
  const fetchedData = userDataArr.find((item) => item.id === userId);
  const { profile, accountBalance, accountNumber } = fetchedData;
  const { firstName, lastName, avatar } = profile;

  return (
    <div className={styles.general_details_wrapper}>
      <div className={styles.upper}>
        <div className={styles.profile_name}>
          <span>
            <img
              src={avatar ? avatar : `../assets/svg/profile-avatar.svg`}
              alt="avatar"
            />
          </span>
          <span className={styles.full_name}>
            <h1>{`${firstName} ${lastName}`}</h1>
            <p>LSQFf587g9O</p>
          </span>
        </div>
        <div className={styles.user_tier}>
          <h2>User's Tier</h2>
          <span>
            <img src={"../assets/svg/star-fill.svg"} alt="star-fill" />
            <img src={"../assets/svg/star-outline.svg"} alt="star-outline" />
            <img src={"../assets/svg/star-outline.svg"} alt="star-outline" />
          </span>
        </div>
        <div className={styles.amount}>
          <h1>₦{accountNumber}</h1>
          <p>{accountBalance}/Providus Bank</p>
        </div>
      </div>
      <div className={styles.below}>
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
