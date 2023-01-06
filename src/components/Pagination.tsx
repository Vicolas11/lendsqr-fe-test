import styles from "../styles/Dashboard.module.scss";

const Pagination = (): JSX.Element => {
  const numArr = [1, 2, 3, "...", 15, 16];
  return (
    <div className={styles.pagination_wrapper}>
      <div className={styles.left}>
        <h1>Showing</h1>
        <span>
          <h1>100</h1>
          <img src="../assets/svg/dropdown.svg" alt="DropDown" />
        </span>
        <h1>out of 100</h1>
      </div>
      <div className={styles.right}>
        <span>
          <img src="../assets/svg/arrow-left.svg" alt="arrow-left" />
        </span>
        {numArr?.map((num, idx) => {
          return <h3 key={`${idx}`}>{num}</h3>;
        })}
        <span>
          <img src="../assets/svg/arrow-right.svg" alt="arrow-right" />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
