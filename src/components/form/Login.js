import React, { useState } from 'react'
// import { auth } from '../config/Config'
import { auth } from '../../config/Config'
import { Link } from 'react-router-dom'
import login1 from '../../images/log.svg'
import './style.css'
// import '../css/Home.css'


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
        }).catch(err => setError(err.message));
    }

//     const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });

    return (
        <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" onSubmit={login}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Email" 
                 onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} value={password} />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              {/* <div className="social-media">
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
              </div> */}
            </form>
            
          </div>
        </div>
  
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button class="btn transparent" id="sign-up-btn">
              <Link to="signup"> Sign up</Link>
              </button>
            </div>
            <img src={login1} className="image" alt="" />
          </div>
          
      </div>
      </div>
    // {/* //     <div className='container'>
    //         <div className='container-login'>
    //             <div className='wrap-login'>
    //     <br />
        
    //     <br />
    //     <form autoComplete="off" className='login-form' onSubmit={login}>
    //     <h2 className='.login-form-title '>Login</h2>
    //         <label htmlFor="email">Email</label>
    //         <input type="email" className='form-control' required */}
    /* //             onChange={(e) => setEmail(e.target.value)} value={email} />
    //         <br />
    //         <label htmlFor="password">Password</label>
    //         <input type="password" className='form-control' required */
    /* //             onChange={(e) => setPassword(e.target.value)} value={password} />
    //         <br />
    //         <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
    //     </form>
    //     {error && <span className='error-msg'>{error}</span>}
    //     <br/>
    //     <span>Don't have an account? Register
    //         <Link to="signup"> Here</Link>
    //     </span>
    //     </div> */
    /* //     </div>
    // </div> */
    
    )
}

export default Login
