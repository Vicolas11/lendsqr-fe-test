import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="inner_wrapper">
      <div className="welcome">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </div>
      <form className="login_form" method="POST">
        <div className="email_input_wrapper">
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="password_input_wrapper">
          <label
            htmlFor="password"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <h2 className="forgetPassword">
          <Link to={"/login"}>FORGET PASSWORD?</Link>
        </h2>
        <div>
          <button type="submit">LOG IN</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
