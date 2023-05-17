import React from "react";
import google from "../imgs/google.png";
import apple from "../imgs/apple.png";
import "./Login.css";

function Login() {

  return (
    <div className="UContainer">
      <div className="first-one">
        <h1>Board.</h1>
      </div>
      <div className="second-one">
        <div className="second-inner">
           <h1>Sign In</h1>
           <h4>Sign in to your account</h4>
           <div className="sign">
             <div className="google">
               <p id="signIn"><img src={google} alt="google"/> Sign in with Google</p>
             </div>
             <div className="apple">
               <p><img src={apple} alt="apple"/> Sign in with Apple</p>
             </div>
           </div>
           <form>
              <label>Email Address</label>
              <input type="email" placeholder="Email" />
              <label>Password</label>
              <input type="password" placeholder="Password" />
              <span>Forgot Password?</span>
              <button>Sign in</button>
           </form>
           <p>Don't have an account? 
            <span>
              Register here
            </span>
           </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
