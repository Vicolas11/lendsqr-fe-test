import styles from "../styles/Dashboard.module.scss";
import { useRef } from "react";

const FilterDropDown = (): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.filter_dropdown_wrapper}>
      <form>
        <div className={styles.org}>
          <label htmlFor="org">Organisation</label>
          <select name="org" id="org">
            <option value="">Select</option>
            <option value="Lendsqr">Lendsqr</option>
            <option value="Irorun">Irorun</option>
            <option value="Lendstar">Lendstar</option>
          </select>
        </div>
        <div className={styles.user}>
          <label htmlFor="user">Username</label>
          <input type="text" name="user" id="user" placeholder="User" />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className={styles.date}>
          <label htmlFor="date">Date</label>
          <input
            type="text"
            name="date"
            id="date"
            placeholder="Date"
            ref={ref}
            onFocus={() => (ref.current!.type = "date")}
            onBlur={() => {
              ref.current!.type = "date";
              ref.current!.style.background = "none";
            }}
          />
        </div>
        <div className={styles.phone}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
        </div>
        <div className={styles.status}>
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>
        <div className={styles.btn_wrapper}>
          <button className={styles.reset_btn}>Reset</button>
          <button className={styles.filter_btn}>Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterDropDown;
