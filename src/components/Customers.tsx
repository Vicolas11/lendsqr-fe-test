import styles from "../styles/Dashboard.module.scss";
import { dashData } from "../utils/dashdata.util";
import { Fragment } from "react";

const Customers = (): JSX.Element => {
  return (
    <Fragment>
      <h3>customers</h3>
      {dashData[0]?.customers?.map((data, idx) => (
        <div key={`${data?.id}`} className={styles.customers} id={styles[`customers_${idx}`]}>
          <span>
            <img src={`../assets/svg/${data?.icon}`} alt={data?.alt} />
          </span>
          <h3>{data?.title}</h3>
        </div>
      ))}
    </Fragment>
  );
};

export default Customers;
