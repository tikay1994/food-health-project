import React from "react";
import "./style.css";
function Login(props) {
  return (
    <div>
      <div className="login-account">
        <div className="">
          <h1 className="">LOGIN</h1>

          <div className="">
            <form method="POST" className="">
              <div className="">
                <label for="email" className="">
                  Username Or Email
                </label>
                <div>
                  <input
                    type="text"
                    name="email"
                    className=""
                    placeholder="Username Or Email"
                  />
                </div>
              </div>
              <div className="">
                <label for="password" className="">
                  Password
                </label>
                <div>
                  <input
                    type="password"
                    name="password"
                    className=""
                    placeholder="Password"
                  />
                </div>
              </div>
              <button className="btn-login">Login</button>
            </form>
          </div>
          <div className="login-footer">
            <a href="#" className="login-register">
              Register
            </a>
            <a href="#" className="login-forgot">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
