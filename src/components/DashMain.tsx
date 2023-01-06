import styles from "../styles/Dashboard.module.scss";
import CardBoxes from "./CardBoxes";
import DashTable from "./DashTable";

const DashMain = (): JSX.Element => {
  return (
    <div className={styles.dash_main_wrapper}>
      <p>Users</p>
      <div className={styles.card_box_wrapper}>
        <CardBoxes />
      </div>
      <DashTable />
    </div>
  );
};

export default DashMain;
