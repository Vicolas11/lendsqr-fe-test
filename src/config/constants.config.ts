import { IConstants } from "../../interfaces/constants.interface";

const ENV = (process.env.NODE_ENV as string) || "development";

const constants: IConstants = {
  test: ENV === "test",
  dev: ENV === "development",
  prod: ENV === "production",
  mockAPI: process.env.REACT_APP_MOCK_API as string,
  mockAPIById: process.env.REACT_APP_MOCK_API_BY_ID as string,
};

export default constants;
