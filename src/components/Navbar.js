import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
const Navbar = () => {
    return (
        <div className='navbox'>
            <div className='leftside'>
                <img src={logo} />
            </div>
            <div className='rightside'>
                <Link to='/signup' className='navlink'>Sign Up</Link>
                <Link to='/login' className='navlink'>Log In</Link>

            </div>

            
        </div>
    )
}

export default Navbar
