import React, { useState } from 'react';
import { Link, json } from 'react-router-dom'
import './style.css';

export default function Signup() {

  //--------ANIMATION LOGIC-----------
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation:""}) //useStateSnippet
  
  //-----ON-SUBMIT SIGNUP FORM-------
  const handleSubmit = async(e) => {// 'e' here is parameter(any variable) where function is being clicked
    e.preventDefault();                   // **Synthetic event**
    const response = await fetch("http://localhost:4000/api/createuser", {
      method: 'POST',                     //post method needs a body 
      headers: {
        'Content-Type': 'application/json'  //copy paste from thunder client
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
      //these parameters must be same as body of backend
    });

    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    
  }
//Function to allow user to type and it registers as value, else they remain static as initialized " " empty
  const whenChange = (event) => {
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }


  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup"> 
          
          {/* SIGN -IN */}
          <form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            {/*submit-button*/}
            <input type="submit" value="Login" className="btn solid" />

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
             
            </div>
          </form>

          {/* SIGN -UP */}
          <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>                                                 {/*"whenChange" is the variable*/}
              <input type="text" placeholder="Username" name='name' value={credentials.name} onChange={whenChange} /> 
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" name='email' value={credentials.email} onChange={whenChange}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name='password' value={credentials.password} onChange={whenChange}/>
            </div>
            <div className="input-field">
            <i class="fa-solid fa-address-book"></i>
              <input type="text" placeholder="Address" name='geolocation' value={credentials.geolocation} onChange={whenChange}/>
            </div>
            {/*submit-button*/}
            <input type="submit" value="Sign Up" className="btn solid" />

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Join us to save food and your pocket!</p>
            <button className="btn transparent" onClick={handleSignUpClick}>Sign Up</button>
          </div>
          <img src="./img/log.svg" className="image" alt=""/>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Login to order your next meal!</p>
            <button className="btn transparent" onClick={handleSignInClick}>Sign In</button>
          </div>
          <img src="./img/register.svg" className="image" alt=""/>
        </div>
      </div>
    </div>
  );
}
