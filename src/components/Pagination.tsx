import { PaginationProps } from "../../interfaces/paginate.interface";
import styles from "../styles/Dashboard.module.scss";
import { forwardRef, useEffect, useState } from "react";

const Pagination = (props: PaginationProps): JSX.Element => {
  const { maxNumOfPages, currentPageNum, increasePageNum, decreasePageNum } =
    props;
  const [selectNumArr, setSelectNumArr] = useState<number[]>([]);
  const isNextPage = maxNumOfPages == currentPageNum;
  const isPrevPage = currentPageNum <= 1;
  const arrLen = selectNumArr.length;
  let arrayOfNum:number[] = [];

  useEffect(() => {
    for (let i = 1; i <= maxNumOfPages; i++) {      
      arrayOfNum.push(i);
      setSelectNumArr(arrayOfNum);
    }
  }, [maxNumOfPages]);

  const numArr = [
    ...selectNumArr.slice(0, 3),
    "...",
    ...selectNumArr.slice(arrLen - 3, arrLen),
  ];

  return (
    <div className={styles.pagination_wrapper}>
      <div className={styles.left}>
        <h1>Showing</h1>
        <span>
          <select name="org" id="org">
            {selectNumArr.map((num, idx) => (
              <option key={`${idx}`} value={`${num}`}>
                {num}
              </option>
            ))}
          </select>
        </span>
        <h1>out of {maxNumOfPages}</h1>
      </div>
      <div className={styles.right}>
        <button
          disabled={isPrevPage}
          className="disabled:bg-slate-300 disabled:cursor-not-allowed"
          onClick={decreasePageNum}
        >
          <img src="../assets/svg/arrow-left.svg" alt="arrow-left" />
        </button>
        {numArr?.map((num, idx) => {
          return <h3 key={`${idx}`}>{num}</h3>;
        })}
        <button
          disabled={isNextPage}
          className="disabled:bg-slate-300 disabled:cursor-not-allowed"
          onClick={increasePageNum}
        >
          <img src="../assets/svg/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
