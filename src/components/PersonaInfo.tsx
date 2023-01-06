import { InitData, InitDataAlt } from "../../interfaces/userdata.interface";
import { userData } from "../utils/userdata.utils";

const PersonaInfo = () => {
  return (
    <div className="personal_info_wrapper">
      {userData.map((_, index) => {
        const element = userData[index];
        const { title, data } = element;
        return (
          <div key={`${index}`}>
            <h3>{title}</h3>
            {title === "Guarantor" ? (
              <div className="gurantor_wrapper">
                {data.map((_, idx) => {
                  const temp = data[idx] as InitDataAlt;
                  const { gurantor } = temp;
                  return (
                    <div key={`${idx}`}>
                      {gurantor.map((item, idx) => {
                        const { subtitle, value } = item;
                        return (
                          <span key={`${idx}`}>
                            <p>{subtitle}</p>
                            <h2>{value}</h2>
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="inner_wrapper">
                {data.map((info, idx) => {
                  const newInfo = info as InitData;
                  const { subtitle, value } = newInfo;
                  return (
                    <span key={`${idx}`}>
                      <p>{subtitle}</p>
                      <h2>{value}</h2>
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PersonaInfo;
