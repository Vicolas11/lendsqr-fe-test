import { DropdownModalProps } from "../../interfaces/props.interfaces";
import { dropdownInput } from "../../data/dashboardData";
import { useRef, MouseEvent } from "react";
import styles from "./styles.module.scss";

export default function FilterDropDownModal({
  arrayLen,
  index,
}: DropdownModalProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleModalClick}
      className={`${styles.filterDropdownWrapper} ${
        arrayLen - 1 === index ? styles.lastColumn : ""
      }`}
    >
      <form>
        <div className={styles.selectWrapper}>
          <label htmlFor="org">Organisation</label>
          <select name="org" id="org">
            <option value="" className={styles.first}>
              Select
            </option>
            <option value="Lendsqr">Lendsqr</option>
            <option value="Irorun">Irorun</option>
            <option value="Lendstar">Lendstar</option>
          </select>
        </div>
        {dropdownInput.map(({ label, type, name }, idx) => (
          <div className={styles.inputWrapper} key={idx}>
            <label htmlFor={name}>{label}</label>
            <input
              type={type}
              name={name}
              id={name}
              placeholder={label}
              ref={name === "date" ? inputRef : null}
              onFocus={
                name === "date"
                  ? () => (inputRef.current!.type = "date")
                  : () => {}
              }
              onBlur={
                name === "date"
                  ? () => {
                      inputRef.current!.type = "date";
                      inputRef.current!.style.background = "none";
                    }
                  : () => {}
              }
            />
          </div>
        ))}
        <div className={styles.selectWrapper}>
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.resetBtn}>Reset</button>
          <button className={styles.filterBtn}>Filter</button>
        </div>
      </form>
    </div>
  );
}
