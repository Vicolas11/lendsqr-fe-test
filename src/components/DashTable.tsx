import { dashData } from "../utils/dashdata.util";
import { MdFilterList } from "react-icons/md";
import Pagination from "./Pagination";
import { Fragment } from "react";
import { userStatus } from "../utils/userstatus.util";

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
            <tr>
              {columnTitle.map((lbl, idx) => (
                <th key={`${idx}`} scope="col" className="py-3 px-2">
                  <div className="table_head">
                    {lbl}
                    <MdFilterList className="ml-1 w-4 h-4 p-0 cursor-pointer" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item, idx) => (
              <tr key={`${idx}`} className="dash_table_row">
                <td>{item?.organisation}</td>
                <td>{item?.username}</td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td>{item?.date}</td>
                {userStatus({status: item?.status})}
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
