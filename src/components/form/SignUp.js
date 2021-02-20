import React, { useState } from 'react'
import { auth, db } from '../../config/Config'
import { Link } from 'react-router-dom'
import reg from '../../images/register.svg'
import './style.css'

// import '../css/Home.css'


   
const SignUp = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [setError] = useState('');

    // signup
    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }
    return (
        <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={signup}>
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username"
                onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" 
                 onChange={(e) => setEmail(e.target.value)} value={email}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} value={password}/>
              </div>
              <input type="submit" class="btn" value="Sign up" />
              {/* <p className="social-text">Or Sign up with social platforms</p>
              <div class="social-media">
                <a  class="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a  className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a  className="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a  className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div> */}
            </form>


              </div>
              </div>
              <div class="panels-container">
          {/* <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button class="btn transparent" id="sign-up-btn" >
              <Link to="login"> Sign up </Link>
              
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div> */}
          <div className="panel left-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn">
              <Link to="login"> Sign in </Link>
              </button>
            </div>
            <img src={reg} className="image" alt="" />
          </div>
        </div>
              </div>
        // <div className='container'>
        // <br />
        // <h2>Sign up</h2>
        // <br />
        // <form autoComplete="off" className='form-group' onSubmit={signup}>
        //     <label htmlFor="name">Name</label>
        //     <input type="text" className='form-control' required
        //         onChange={(e) => setName(e.target.value)} value={name} />
        //     <br />
        //     <label htmlFor="email">Email</label>
        //     <input type="email" className='form-control' required
        //         onChange={(e) => setEmail(e.target.value)} value={email} />
        //     <br />
        //     <label htmlFor="passowrd">Password</label>
        //     <input type="password" className='form-control' required
        //         onChange={(e) => setPassword(e.target.value)} value={password} />
        //     <br />
        //     <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button>
        // </form>
        // {error && <span className='error-msg'>{error}</span>}
        //     <br />
        //     <span>Already have an account? Login
        //         <Link to="login"> Here</Link>
        //     </span>
        // </div>
    )
}

export default SignUp; 

