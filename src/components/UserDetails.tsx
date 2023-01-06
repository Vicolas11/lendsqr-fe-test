import styles from "../styles/UserProfile.module.scss";
import GeneralDetails from "./GeneralDetails";
import PersonaInfo from "./PersonaInfo";
import ProfileNav from "./ProfileNav";

const UserDetails = (): JSX.Element => {
  return (
    <div className={styles.userdetails_wrapper}>
      <ProfileNav />
      <GeneralDetails />
      <PersonaInfo />
    </div>
  );
};

export default UserDetails;
