import { PaginationProps } from "../../interfaces/props.interfaces";
import { arrowLeftIcon, arrowRightIcon } from "../../assets";
import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";

export default function Pagination(props: PaginationProps): JSX.Element {
  const { maxNumOfPages, currentPageNum, increasePageNum, decreasePageNum } =
    props;
  const [selectNumArr, setSelectNumArr] = useState<number[]>([]);
  const isNextPage = maxNumOfPages == currentPageNum;
  const isPrevPage = currentPageNum <= 1;
  const arrLen = selectNumArr.length;
  const arrayOfNum: number[] = useMemo(() => [], []);

  const onSelectHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("value ==>", evt.target.value);
  };

  useEffect(() => {
    for (let i = 1; i <= maxNumOfPages; i++) {
      arrayOfNum.push(i);
      setSelectNumArr(arrayOfNum);
    }
  }, [arrayOfNum, maxNumOfPages]);

  const numArr = [
    ...selectNumArr.slice(0, 3),
    "...",
    ...selectNumArr.slice(arrLen - 3, arrLen),
  ];

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.left}>
        <h1>Showing</h1>
        <span>
          <select name="org" id="org" onChange={() => onSelectHandler}>
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
        <button disabled={isPrevPage} onClick={decreasePageNum}>
          <img src={arrowLeftIcon} alt="arrow-left" />
        </button>
        {numArr?.map((num, idx) => {
          return <h3 key={`${idx}`}>{num}</h3>;
        })}
        <button disabled={isNextPage} onClick={increasePageNum}>
          <img src={arrowRightIcon} alt="arrow-right" />
        </button>
      </div>
    </div>
  );
}
