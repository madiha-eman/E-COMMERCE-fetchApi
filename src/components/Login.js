import React, { useState } from 'react'
import { auth } from '../config/Config'
import { Link } from 'react-router-dom'
import '../css/Home.css'


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
        }).catch(err => setError(err.message));
    }

    return (
        <div className='container'>
            <div className='container-login'>
                <div className='wrap-login'>
        <br />
        
        <br />
        <form autoComplete="off" className='login-form' onSubmit={login}>
        <h2 className='.login-form-title '>Login</h2>
            <label htmlFor="email">Email</label>
            <input type="email" className='form-control' required
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' required
                onChange={(e) => setPassword(e.target.value)} value={password} />
            <br />
            <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
        </form>
        {error && <span className='error-msg'>{error}</span>}
        <br/>
        <span>Don't have an account? Register
            <Link to="signup"> Here</Link>
        </span>
        </div>
        </div>
    </div>
    )
}

export default Login
