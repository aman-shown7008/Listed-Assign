import React from "react";
import google from "../imgs/google.png";
import apple from "../imgs/apple.png";
import "./SignUp.css";

function SignUp() {
  

  return (
    <div className="UContainer">
      <div className="first-one">
        <h1>Board.</h1>
      </div>
      <div className="second-one">
        <div className="second-inner">
           <h1>Register</h1>
           <h4>Register to your account</h4>
           <div className="sign">
             <div className="google">
               <p id="signIn"><img src={google} alt="google"/> SignUp with Google</p>
             </div>
             <div className="apple">
               <p><img src={apple} alt="apple"/> SignUp with Apple</p>
             </div>
           </div>
           <form>
              <label>Full Name</label>
              <input type="text" placeholder="Display name" />
              <label>Email Address</label>
              <input type="email" placeholder="Email" />
              <label>Password</label>
              <input type="password" placeholder="Password" />
              <span>Forgot Password?</span>
              <button>SignUp</button>
           </form>
           <p>If you have an account? 
            <span>
              Login here
            </span>
           </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
