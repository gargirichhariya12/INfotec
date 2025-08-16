import React, { useState }from 'react';
import './LoginForm.css';


function LoginForm() {
  const [isSignup, setIssSignup] = useState(true);
  return (
    <div className="container">

      <div className="form-box box">
        <h1 id="title">{isSignup ? "SignUp" :" Log In"} </h1>
        <form className="form">
          <div className="input-group ">
            {isSignup && (
              <div className="input-field box">
              <input type="text" placeholder="Name" />
            </div>
            )}
            
            <div className="input-field box">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field box">
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="btn-field">
            <button type="button" onclick = {() => setIssSignup(true)}
              className={isSignup? "" : "disable"}>
                Sign Up
                </button>
                <button type="button" onclick = {() => setIssSignup(false)}
              className={!isSignup? "" : "disable"}>
                Log In
                </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
