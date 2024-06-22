import {
  setHasFetched,
  setTotalPage,
  setTotalUsers,
  setUserData,
} from "../../store/slice/userdata.slice";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/store.hook";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { constants } from "../../config/constants.config";
import FilterDropDownModal from "../FilterDropDownModal";
import { userStatus } from "../../utils/userstatus.util";
import { formatDate } from "../../utils/formatime.util";
import { columnTitle } from "../../data/dashboardData";
import { SlOptionsVertical } from "react-icons/sl";
import UserOptionModal from "../UserOptionModal";
import { MdFilterList } from "react-icons/md";
import { arrowBackIcon } from "../../assets";
import styles from "./styles.module.scss";
import Pagination from "../Pagination";
import Loader from "../Loader";


export default function Table(): JSX.Element {
  const {
    searchTerm,
    totalPages,
    hasFetched,
    data: userDataArr,
    filteredData: userFilteredDataArr,
  } = useAppSelector((state) => state.userData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get("page");
  const isFilter = searchParams.get("isFilter");
  const isSearch = searchParams.get("isSearch");
  const [page, setPage] = useState(!pageNumber ? 1 : +pageNumber);
  const [hasError, setHasError] = useState({ msg: "", status: false });
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const { mockAPI } = constants;
  const dispatch = useAppDispatch();
  const tableRef = useRef<HTMLTableElement>(null);
  const [clickedRow, setClickedRow] = useState<number | null>(null);
  const [clickedColumn, setClickedColumn] = useState<number | null>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageSize = 9;

  const handleRowClick = (index: number) => {
    setClickedRow(clickedRow === index ? null : index);
    setClickedColumn(null);
  };

  const handleColumnClick = (event: MouseEvent, idx: number) => {
    event.stopPropagation();
    setClickedColumn(clickedColumn === idx ? null : idx);
    setClickedRow(null);
  };

  const handlePageChange = (newPageNum: number) => {
    dispatch(setHasFetched(true));
    setPage(newPageNum);
    setSearchParams({ page: `${newPageNum}` });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `${mockAPI}/data?page=${page}&pageSize=${pageSize}`
        );

        if (!response.ok) {
          setHasError({
            status: true,
            msg: response.statusText || "An error occurred!",
          });
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        dispatch(setUserData(data.data));
        dispatch(setTotalUsers(data.totalRecords));
        dispatch(setTotalPage(data.totalPages));
        setIsLoading(false);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setHasError({
          status: true,
          msg: error.message || "An error occurred!",
        });
        setIsLoading(false);
      }
    };

    hasFetched && fetchData();
  }, [page, hasFetched]);

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
        {isLoading ? (
          <Loader />
        ) : hasError.status ? (
          <h2 className={styles.hasError}>{hasError.msg}</h2>
        ) : userDataArr.length === 0 ? (
          <h2 className={styles.notFound}>No Record Found!</h2>
        ) : (
          <>
            {isFilter ||
              (isSearch && (
                <div className={styles.goBack}>
                  <span onClick={() => navigate(`${pathname}?page=${page}`)}>
                    <img src={arrowBackIcon} />
                  </span>
                  {isFilter && <h3>Showing filtered results...</h3>}
                  {isSearch && (
                    <h3>
                      Search Result -{" "}
                      <span className={styles.result}>{searchTerm}</span>
                    </h3>
                  )}
                </div>
              ))}
            <table ref={tableRef}>
              <thead>
                <tr>
                  {columnTitle.map((title, idx) => (
                    <th key={idx} scope="col">
                      <div onClick={(e) => handleColumnClick(e, idx)}>
                        {title}
                        <MdFilterList
                          className={
                            clickedColumn === idx
                              ? styles.active
                              : styles.inactive
                          }
                        />
                        {clickedColumn === idx && (
                          <FilterDropDownModal
                            arrayLen={columnTitle.length}
                            index={idx}
                            close={() => setClickedColumn(null)}
                          />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody ref={tbodyRef}>
                {(isFilter || isSearch
                  ? userFilteredDataArr
                  : userDataArr
                )?.map((item, idx) => (
                  <tr key={idx} className={styles.dashTableRow}>
                    <td>{item?.profile.organization}</td>
                    <td>{item?.profile.username}</td>
                    <td>{item?.profile.email}</td>
                    <td>{item?.profile.phoneNumber}</td>
                    <td>{formatDate(item?.profile.createdAt)}</td>
                    {userStatus({ status: item.profile.status })}
                    <td className="relative">
                      <span onClick={() => handleRowClick(idx)}>
                        <SlOptionsVertical className={styles.optionIcon} />
                      </span>
                      {clickedRow === idx && (
                        <UserOptionModal
                          username={item.profile.username}
                          arrayLen={userDataArr.length}
                          index={idx}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      {!isLoading && !hasError.status && (
        <Pagination
          page={page}
          totalResults={totalPages || 0}
          maxVisiblePages={3}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
