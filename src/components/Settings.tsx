import { dashData } from "../utils/dashdata.util";
import { Fragment } from "react";

const Settings = (): JSX.Element => {
  return (
    <Fragment>
      <h3>settings</h3>
      {dashData[2]?.settings?.map((data) => {
        return (
          <div key={`${data?.id}`} className="settings">
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

export default Settings;
