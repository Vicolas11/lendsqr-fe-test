import {
  InitData,
  InitDataAlt,
  IUserData,
  IUserDataAlt,
} from "../../interfaces/userdata.interface";
import styles from "../styles/UserProfile.module.scss";
import { useAppSelector } from "../hooks/store.hook";
import { userData } from "../utils/userdata.util";

const PersonaInfo = () => {
  const userId = useAppSelector((state) => state.global.userId);
  const userDataArr = useAppSelector((state) => state.userData.data);
  const fetchedData = userDataArr.find((item) => item.id === userId);
  const { profile, email, guarantor, socials, education } = fetchedData;
  const { firstName, lastName, phoneNumber, bvn, gender, currency } = profile;
  const {
    level,
    employmentStatus,
    sector,
    duration,
    officeEmail,
    monthlyIncome,
    loanRepayment,
  } = education;
  const { facebook, instagram, twitter } = socials;
  const {
    firstName: fN,
    lastName: lN,
    phoneNumber: pN,
    gender: gen,
    address,
  } = guarantor;

  const userData: (IUserData | IUserDataAlt)[] = [
    {
      title: "Personal Information",
      data: [
        { subtitle: "full name", value: `${firstName} ${lastName}` },
        { subtitle: "phone number", value: `${phoneNumber}` },
        { subtitle: "email address", value: `${email}` },
        { subtitle: "bvn", value: `${bvn}` },
        { subtitle: "gender", value: `${gender}` },
        { subtitle: "marital status", value: "Single" },
        { subtitle: "children", value: "None" },
        { subtitle: "type of residence", value: "Parent's Apartment" },
      ],
    },
    {
      title: "Educational and Employment",
      data: [
        { subtitle: "level of education", value: `${level}` },
        { subtitle: "employment status", value: `${employmentStatus}` },
        { subtitle: "sector of employment", value: `${sector}` },
        { subtitle: "duration of employment", value: `${duration}` },
        { subtitle: "office email", value: `${officeEmail}` },
        {
          subtitle: "monthly income",
          value: `${currency}${monthlyIncome[0]} - ${currency}${monthlyIncome[1]}`,
        },
        { subtitle: "loan repayment", value: `${loanRepayment}` },
      ],
    },
    {
      title: "Socials",
      data: [
        { subtitle: "Twitter", value: `${twitter}` },
        { subtitle: "facebook", value: `${facebook}` },
        { subtitle: "instagram", value: `${instagram}` },
      ],
    },
    {
      title: "Guarantor",
      data: [
        {
          gurantor: [
            { subtitle: "full name", value: `${fN} ${lN}` },
            { subtitle: "phone number", value: `${pN}` },
            { subtitle: "gender", value: `${gen}` },
            { subtitle: "address", value: `${address}` },
          ],
        },
        {
          gurantor: [
            { subtitle: "full name", value: `${fN} ${lN}` },
            { subtitle: "phone number", value: `${pN}` },
            { subtitle: "gender", value: `${gen}` },
            { subtitle: "address", value: `${address}` },
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.personal_info_wrapper}>
      {userData.map((_, index) => {
        const element = userData[index];
        const { title, data } = element;
        return (
          <div key={`${index}`}>
            <h3>{title}</h3>
            {title === "Guarantor" ? (
              <div className={styles.gurantor_wrapper}>
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
              <div className={styles.inner_wrapper}>
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
