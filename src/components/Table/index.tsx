import { setUserId, toggleUserOption } from "../../store/slice/global.slice";
import { useAppSelector, useAppDispatch } from "../../hooks/store.hook";
import { IMockAPIData } from "../../interfaces/mockapi.interface";
import { useCallback, useEffect, useRef, useState, MouseEvent } from "react";
import { getUserData } from "../../store/slice/userdata.slice";
import { userStatusRand } from "../../utils/duplicate.util";
import { constants } from "../../config/constants.config";
import FilterDropDownModal from "../FilterDropDownModal";
import { userStatus } from "../../utils/userstatus.util";
import { formatDate } from "../../utils/formatime.util";
import { dashData } from "../../data/dashboardData";
import { SlOptionsVertical } from "react-icons/sl";
import UserOptionModal from "../UserOptionModal";
import { MdFilterList } from "react-icons/md";
import styles from "./styles.module.scss";
import Pagination from "../Pagination";
import Loader from "../Loader";

export default function Table(): JSX.Element {
  const userOption = useAppSelector((state) => state.global.userOption);
  const userDataArr = useAppSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [totalNumOfUsers, setTotalNumOfUsers] = useState(
    userDataArr.length || 0
  );
  const [newUserDataArr, setNewUserDataArr] = useState<IMockAPIData[]>([]);
  const [hasError, setHasError] = useState({ msg: "", status: false });
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const trRefs = useRef<HTMLTableRowElement[]>([]);
  const divRef = useRef<HTMLDivElement>(null);
  const { mockAPI } = constants;
  const [top, setTop] = useState(0);
  const numOfUsers = 10;
  const maxNumOfPages = Math.floor(totalNumOfUsers / numOfUsers);
  const tableData = dashData[4]?.tableData;
  const dispatch = useAppDispatch();
  const tableRef = useRef<HTMLTableElement>(null);

  const [clickedRow, setClickedRow] = useState<number | null>(null);
  const [clickedColumn, setClickedColumn] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setClickedRow(clickedRow === index ? null : index);
    setClickedColumn(null);
  };

  const handleColumnClick = (event: MouseEvent, idx: number) => {
    event.stopPropagation();
    setClickedColumn(clickedColumn === idx ? null : idx);
    setClickedRow(null);
  };

  const columnTitle = [
    "Organisation",
    "Username",
    "Email",
    "Phone number",
    "Date Joined",
    "Status",
  ];

  const onOptionClick = ({ idx, id }: { idx: number; id: string }) => {
    setTop(idx);
    dispatch(setUserId(id));
    dispatch(toggleUserOption());
  };

  const slicedUserData = useCallback(
    (currentPageNum: number) => {
      const startIdx = numOfUsers * (currentPageNum - 1);
      return userDataArr.slice(startIdx, startIdx + numOfUsers);
    },
    [userDataArr]
  );

  const increasePageNum = () => {
    if (maxNumOfPages === currentPageNum) {
      return;
    }
    setCurrentPageNum((prev) => prev + 1);
  };

  const decreasePageNum = () => {
    if (currentPageNum <= 1) {
      return;
    }
    setCurrentPageNum((prev) => prev - 1);
  };

  // useEffect(() => {
  //   // if (userDataArr.length === 0) {
  //   setIsLoading(true);
  //   fetch(mockAPI)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const data = json as IMockAPIData[];
  //       console.log(data);
  //       setTotalNumOfUsers(data.length);
  //       dispatch(getUserData(data));
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       // const errMsg = response?.data?.errors[0];
  //       setHasError({ msg: err?.message, status: true });
  //       setIsLoading(false);
  //       console.log(err?.message);
  //     });
  //   // }
  // }, [dispatch, mockAPI]);

  useEffect(() => {
    // Setting UserOptionModal Position relative to each tbody rows
    if (
      divRef.current !== null &&
      trRefs.current[top] !== null &&
      tbodyRef.current !== null
    ) {
      const parent = tbodyRef.current?.getBoundingClientRect() as DOMRect;
      const child = trRefs.current[top]?.getBoundingClientRect() as DOMRect;
      const { top: parentT, height: parentH } = parent;
      const { top: childT } = child;
      const realPosTop = parentT && childT - parentT + 35;
      const { height: h } = divRef.current?.getBoundingClientRect() as DOMRect;
      const isOverflow: boolean = realPosTop + h > parentH;
      const relPosBottom = realPosTop - h - 10;
      if (!isOverflow) {
        divRef.current.style.top = `${realPosTop}px`;
      } else {
        divRef.current.style.top = `${relPosBottom}px`;
      }
    }

    // Trigger Error Message
    const { msg } = hasError;
    console.log(msg);
  }, [userOption, top, hasError]);

  useEffect(() => {
    setNewUserDataArr(slicedUserData(currentPageNum));
  }, [currentPageNum, slicedUserData]);

  // Hide Modal FilterDropDownModal and UserOptionModal when clicked elsewhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tableRef.current &&
        !tableRef.current.contains(event.target as Node)
      ) {
        setClickedColumn(null);
        setClickedRow(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside as unknown as EventListener
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as unknown as EventListener
      );
    };
  }, []);

  return (
    <div className="relative">
      <div className={styles.dashTableWrapper}>
        {isLoading && <Loader />}
        <table ref={tableRef}>
          <thead>
            <tr>
              {columnTitle.map((title, idx) => (
                <th key={idx} scope="col">
                  <div onClick={(e) => handleColumnClick(e, idx)}>
                    {title}
                    <MdFilterList
                      className={
                        clickedColumn === idx ? styles.active : styles.inactive
                      }
                    />
                    {clickedColumn === idx && (
                      <FilterDropDownModal
                        arrayLen={columnTitle.length}
                        index={idx}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody ref={tbodyRef}>
            {tableData?.map((item, idx) => (
              <tr key={idx} className={styles.dashTableRow}>
                <td>{item?.organisation}</td>
                <td>{item?.username}</td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td>{item?.date}</td>
                {userStatus({ status: item.status })}
                <td className="relative">
                  <span onClick={() => handleRowClick(idx)}>
                    <SlOptionsVertical className={styles.optionIcon} />
                  </span>
                  {clickedRow === idx && (
                    <UserOptionModal arrayLen={tableData.length} index={idx} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        maxNumOfPages={maxNumOfPages}
        currentPageNum={currentPageNum}
        increasePageNum={increasePageNum}
        decreasePageNum={decreasePageNum}
      />
    </div>
  );
}
