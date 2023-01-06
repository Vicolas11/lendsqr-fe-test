import styles from "../styles/Dashboard.module.scss";
import { dashData } from "../utils/dashdata.util";
import { Fragment } from "react";

const Businesses = (): JSX.Element => {
  return (
    <Fragment>
      <h3>businesses</h3>
      {dashData[1]?.businesses?.map((data) => (
        <div key={`${data?.id}`} className={styles.businesses}>
          <span>
            <img src={`../assets/svg/${data?.icon}`} alt={data?.alt} />
          </span>
          <h3>{data?.title}</h3>
        </div>
      ))}
    </Fragment>
  );
};

export default Businesses;
