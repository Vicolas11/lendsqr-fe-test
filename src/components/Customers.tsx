import { dashData } from "../utils/dashdata.util";
import { Fragment } from "react";

const Customers = (): JSX.Element => {
  return (
    <Fragment>
      <h3>customers</h3>
      {dashData[0]?.customers?.map((data) => {
        return (
          <div key={`${data?.id}`} className="customers">
            <span>
              <img src={`../assets/svg/${data?.icon}`} alt={data?.alt} />
            </span>
            <h3>{data?.title}</h3>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Customers;
