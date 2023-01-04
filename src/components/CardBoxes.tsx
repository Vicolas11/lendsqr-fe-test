import { dashData } from "../utils/dashdata.util";
import { Fragment } from "react";

const CardBoxes = (): JSX.Element => {
  return (
    <Fragment>
      {dashData[3]?.main?.map((data) => {
        return (
          <div key={`${data?.id}`} className="card_box">
            <img src={`../assets/svg/${data?.icon}`} alt={data?.alt} />
            <h3>{data?.title}</h3>
            <h1>{data?.value.toLocaleString()}</h1>
          </div>
        );
      })}
    </Fragment>
  );
};

export default CardBoxes;
