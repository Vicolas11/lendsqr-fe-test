import { PrivateRouterProps } from "../interfaces/props.interfaces";
import LoginPage from "../pages/LoginPage";

export default function PrivateRouter({ children }: PrivateRouterProps) {
  const isAuth = false;

  if (!isAuth) {
    return <LoginPage />;
  }

  return children;
}
