import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

//-----------------------------ON-SUBMIT SIGNUP FORM------------------------------
  
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: ""}) //useStateSnippet

  const handleSubmit = async(e) => {// 'e' here is parameter(any variable) where function is being clicked
    e.preventDefault();                   // **Synthetic event**
    console.log(JSON.stringify({name: credentials.name,email:credentials.email, password:credentials.password,location: credentials.geolocation}))
    const response = await fetch("http://localhost:4000/api/createuser", {//the route in CreateUser.js is named createuser(smalls)
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
      const errorMessage = json.error || "An error occurred. Please try again.";
      alert(errorMessage);
    }
    
  }
//Function to allow user to type and it registers as value, else they remain static as initialized " " empty
  const whenChange = (event) => {
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  //----------------------------SIGN - IN PART------------------------------------
  
const navigate = useNavigate();  
const [loginCredentials, setLoginCredentials] = useState({ email: "", password: ""}); //useStateSnippet
  
const handleLogin = async (clickEvent) => {// 'clickEvent' here is parameter(any variable) where function is being clicked
  clickEvent.preventDefault();                   // **Synthetic event**
  console.log(JSON.stringify({ email: loginCredentials.email, password: loginCredentials.password }))
  const loginResponse = await fetch("http://localhost:4000/api/loginuser", {//the route in CreateUser.js is named loginuser(smalls)
    method: 'POST',                     //post method needs a body 
    headers: {
      'Content-Type': 'application/json'  //copy paste from thunder client
    },
    body: JSON.stringify({ email: loginCredentials.email, password: loginCredentials.password })
    //these parameters must be same as body of backend
  });

  const jsonResponse = await loginResponse.json()
  console.log(jsonResponse);

  if (!jsonResponse.success) {
    alert("Enter Valid Credentials")
  }
  
  if (jsonResponse.success)
  {
    localStorage.setItem("authToken", jsonResponse.authToken);
    console.log(localStorage.getItem("authToken"))
    navigate("/");
    }
}
//Function to allow user to type and it registers as value, else they remain static as initialized " " empty
const handleLoginChange = (inputEvent) => {
  setLoginCredentials({...loginCredentials,[inputEvent.target.name]:inputEvent.target.value})
}


  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup"> 
          
          {/* SIGN -IN */}
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={loginCredentials.email}  onChange={handleLoginChange}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={loginCredentials.password}  onChange={handleLoginChange}/>
            </div>
            {/*submit-button*/}
            <button type="submit" value="Login" className="btn" onClick={handleLogin}>Sign in</button>

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
            <i className="fa-solid fa-address-book"></i>
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
