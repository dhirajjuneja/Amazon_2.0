import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    
    
    function signIn(e){
        e.preventDefault();
        
    }
    
    function register(e){
        e.preventDefault();
        
    }
    
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h2>Sign-in</h2>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => SetEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => SetPassword(e.target.value)} />

          <button className='login__signInButton' type='submit' onClick={signIn} >Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
