import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Register() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //It successfully created a new user with user and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="register__container">
        <h2>Create New Account</h2>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />

          <button
            className="register__registerButton"
            type="submit"
            onClick={register}
          >
            Sign Up
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Clone Conditions of Use and
          Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
        </p>
        <Link to="/login">
          <button className="register__signInButton">
            Already have a amazon account?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
