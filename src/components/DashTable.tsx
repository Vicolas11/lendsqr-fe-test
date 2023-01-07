import { setUserId, toggleUserOption } from "../store/slice/global.slice";
import { useAppDispatch, useAppSelector } from "../hooks/store.hook";
import { MockAPIDataType } from "../../interfaces/mockapi.interface";
import { Fragment, useEffect, useRef, useState } from "react";
import { errorToastStyle } from "../utils/toaststyles.util";
import { getUserData } from "../store/slice/userdata.slice";
import { userStatusRand } from "../utils/duplicate.util";
import { userStatus } from "../utils/userstatus.util";
import { formatDate } from "../utils/formatime.util";
import styles from "../styles/Dashboard.module.scss";
import constants from "../config/constants.config";
import { SlOptionsVertical } from "react-icons/sl";
import { dashData } from "../utils/dashdata.util";
import toast, { Toaster } from "react-hot-toast";
import UserOptionModal from "./UserOptionModal";
import { MdFilterList } from "react-icons/md";
import FilterDropDown from "./FilterDropDown";
import Pagination from "./Pagination";
import Loader from "./Loader";

const DashTable = (): JSX.Element => {
  const userOption = useAppSelector((state) => state.global.userOption);
  const userDataArr = useAppSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [totalNumOfUsers, setTotalNumOfUsers] = useState(
    userDataArr.length || 0
  );
  const [newUserDataArr, setNewUserDataArr] = useState<MockAPIDataType[]>([]);
  const [hasError, setHasError] = useState({ msg: "", status: false });
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const trRefs = useRef<HTMLTableRowElement[]>([]);
  const h3Refs = useRef<HTMLHeadingElement[]>([]);
  const divRef = useRef<HTMLDivElement>(null);
  const { mockAPI } = constants;
  const [top, setTop] = useState(0);
  const numOfUsers = 10;
  const maxNumOfPages = Math.floor(totalNumOfUsers / numOfUsers);
  const tableData = dashData[4]?.tableData;
  const dispatch = useAppDispatch();

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

  const slicedUserData = (currentPageNum: number) => {
    const startIdx = numOfUsers * (currentPageNum - 1);
    return userDataArr.slice(startIdx, startIdx + numOfUsers);
  };

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

  useEffect(() => {
    // if (userDataArr.length === 0) {
    setIsLoading(true);
    fetch(mockAPI)
      .then((response) => response.json())
      .then((json) => {
        const data = json as MockAPIDataType[];
        setTotalNumOfUsers(data.length);
        dispatch(getUserData(data));
        setIsLoading(false);
      })
      .catch((err) => {
        // const errMsg = response?.data?.errors[0];
        setHasError({ msg: err?.message, status: true });
        setIsLoading(false);
        toast.error(err?.message, errorToastStyle);
      });
    // }
  }, []);

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
      const { height: h } = divRef.current?.getBoundingClientRect();
      const isOverflow: boolean = realPosTop + h > parentH;
      const relPosBottom = realPosTop - h - 10;
      if (!isOverflow) {
        divRef.current.style.top = `${realPosTop}px`;
      } else {
        divRef.current.style.top = `${relPosBottom}px`;
      }
    }

    // Trigger Error Message
    const { msg, status } = hasError;
    status && toast.error(msg, errorToastStyle);
  }, [userOption, top]);

  useEffect(() => {
    setNewUserDataArr(slicedUserData(currentPageNum));
  }, [currentPageNum]);

  return (
    <Fragment>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={styles.dash_table_wrapper}>
        {isLoading && <Loader />}
        <table>
          <thead>
            <tr className={styles.table_head_row}>
              {columnTitle.map((lbl, idx) => (
                <th
                  key={`${idx}`}
                  scope="col"
                  className="py-3 px-2 cursor-pointer relative"
                >
                  <div className={styles.table_head}>
                    {lbl}
                    <MdFilterList className="ml-1 w-4 h-4 p-0 " />
                    <FilterDropDown />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.table_body} ref={tbodyRef}>
            {newUserDataArr?.map((item, idx) => (
              <tr
                key={`${idx}`}
                className={styles.dash_table_row}
                ref={(el) => el && trRefs.current.push(el)}
              >
                <td>{item?.orgName}</td>
                <td>{item?.userName}</td>
                <td>{item?.email}</td>
                <td>{item?.phoneNumber}</td>
                <td>{formatDate(item?.createdAt)}</td>
                {userStatus({ status: userStatusRand[idx] })}
                <td id={styles.table_body_td}>
                  <span onClick={() => onOptionClick({ idx, id: item?.id })}>
                    <SlOptionsVertical className={styles.option_icon} />
                  </span>
                </td>
              </tr>
            ))}
            <tr>
              <td>{userOption && <UserOptionModal ref={divRef} />}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination
        maxNumOfPages={maxNumOfPages}
        currentPageNum={currentPageNum}
        increasePageNum={increasePageNum}
        decreasePageNum={decreasePageNum}
      />
    </Fragment>
  );
};

export default DashTable;
