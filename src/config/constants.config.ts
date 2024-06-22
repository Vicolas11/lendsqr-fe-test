const ENV = (import.meta.env.NODE_ENV as string) || "development";

export const constants = {
  test: ENV === "test",
  dev: ENV === "development",
  prod: ENV === "production",
  mockAPI: import.meta.env.VITE_APP_MOCK_API as string,
};
