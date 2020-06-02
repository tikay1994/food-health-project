import React from "react";
import "./style.css";
import logo from "../../Assets/Images/logo.svg";
import { Link } from "react-router-dom";
function Login(props) {
  return (
    <div className="login-account">
      <div className="login-header">
        <img width="48px" height="48px" src={logo} alt="logo" />
        <h1 className="login-title">LOGIN</h1>
        <div className="">
          <form method="POST" className="">
            <div className="">
              <label for="email" className="">
                Username Or Email
              </label>
              <div className="group-input-user">
                <svg
                  width="24px"
                  height="24px"
                  fill="#007bff"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14.016q2.531 0 5.273 1.102t2.742 2.883v2.016h-16.031v-2.016q0-1.781 2.742-2.883t5.273-1.102zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z"></path>
                </svg>
                <input
                  type="text"
                  name="email"
                  className="input-user"
                  placeholder="Username Or Email"
                />
              </div>
            </div>
            <div className="">
              <label for="password" className="">
                Password
              </label>
              <div className="group-input-user">
                <svg
                  width="24px"
                  height="24px"
                  fill="#007bff"
                  viewBox="0 0 20 20"
                >
                  <path d="M18.6 4h-17.2c-0.771 0-1.4 0.629-1.4 1.4v9.2c0 0.769 0.629 1.4 1.399 1.4h17.2c0.77 0 1.4-0.631 1.4-1.4v-9.2c0.001-0.771-0.63-1.4-1.399-1.4zM11 6h2v2h-2v-2zM14 9v2h-2v-2h2zM8 6h2v2h-2v-2zM11 9v2h-2v-2h2zM5 6h2v2h-2v-2zM8 9v2h-2v-2h2zM2 6h2v2h-2v-2zM5 9v2h-2v-2h2zM4 14h-2v-2h2v2zM15 14h-10v-2h10v2zM18 14h-2v-2h2v2zM15 11v-2h2v2h-2zM18 8h-4v-2h4v2z"></path>
                </svg>
                <input
                  type="password"
                  name="password"
                  className="input-user"
                  placeholder="Password"
                />
              </div>
            </div>
            <Link to="/user">
              <button className="btn-login">Login</button>
            </Link>
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
  );
}

export default Login;
