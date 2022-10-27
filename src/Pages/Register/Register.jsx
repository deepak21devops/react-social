import React from "react";
import "./register.scss";
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="text" placeholder="Name"></input>
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Social Media.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
