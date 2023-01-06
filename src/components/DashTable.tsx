import { userStatus } from "../utils/userstatus.util";
import { SlOptionsVertical } from "react-icons/sl";
import { dashData } from "../utils/dashdata.util";
import UserOptionModal from "./UserOptionModal";
import { MdFilterList } from "react-icons/md";
import FilterDropDown from "./FilterDropDown";
import Pagination from "./Pagination";
import { Fragment } from "react";

const DashTable = (): JSX.Element => {
  const columnTitle = [
    "Organisation",
    "Username",
    "Email",
    "Phone number",
    "Date Joined",
    "Status",
  ];

  const tableData = dashData[4]?.tableData;

  return (
    <Fragment>
      <div className="dash_table_wrapper">
        <table>
          <thead>
            <tr className="table_head_row">
              {columnTitle.map((lbl, idx) => (
                <th
                  key={`${idx}`}
                  scope="col"
                  className="py-3 px-2 cursor-pointer relative"
                >
                  <div className="table_head">
                    {lbl}
                    <MdFilterList className="ml-1 w-4 h-4 p-0 " />
                    <FilterDropDown />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table_body">
            {tableData?.map((item, idx) => (
              <tr key={`${idx}`} className="dash_table_row">
                <td>{item?.organisation}</td>
                <td>{item?.username}</td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td>{item?.date}</td>
                {userStatus({ status: item?.status })}
                <td id="table_body_td" className="relative">
                  <SlOptionsVertical className="option_icon" />
                  <UserOptionModal />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </Fragment>
  );
};

export default DashTable;
