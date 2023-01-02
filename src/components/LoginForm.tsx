import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = (): JSX.Element => {
  const [textInput, setTextInput] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showErrMsg, setShowErrMsg] = useState({
    email: false,
    password: false,
  });

  const onEmailChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    // Input value
    setTextInput((prev) => ({
      email: evt.target.value,
      password: prev.password,
    }));
    // Remove error styling
    const { email } = showErrMsg;

    if (email)
      setShowErrMsg((prev) => ({ email: false, password: prev.password }));
  };

  const onPasswordChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setTextInput((prev) => ({
      email: prev.email,
      password: evt.target.value,
    }));
    // Remove error styling
    const { password } = showErrMsg;

    if (password)
      setShowErrMsg((prev) => ({ email: prev.email, password: false }));
  };

  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { email, password } = textInput;
    console.log("status => ", showErrMsg);
    // Validate for empty inputs
    if (email.length <= 0 && password.length <= 0) {
      setShowErrMsg({ email: true, password: true });
      return;
    }

    if (email.length <= 0) {
      setShowErrMsg((prev) => ({ email: true, password: prev.password }));
      return;
    }

    if (password.length <= 0) {
      setShowErrMsg((prev) => ({ email: prev.password, password: true }));
      return;
    }
  };

  return (
    <div className="inner_wrapper">
      <div className="welcome">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </div>
      <form className="login_form" method="POST" onSubmit={onSubmitHandler}>
        <div className="email_input_wrapper">
          <input
            className={showErrMsg.email ? `errorInputStyle` : `inputStyle`}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={textInput.email}
            onChange={onEmailChangeHandler}
          />
          {showErrMsg.email && <p className="errMsg">Enter an Email</p>}
        </div>
        <div className="password_input_wrapper">
          <label
            htmlFor="password"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </label>
          <input
            className={showErrMsg.password ? `errorInputStyle` : `inputStyle`}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            value={textInput.password}
            onChange={onPasswordChangeHandler}
          />
          {showErrMsg.password && <p className="errMsg">Enter Password</p>}
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
