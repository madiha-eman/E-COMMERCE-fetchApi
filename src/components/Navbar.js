import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { auth } from '../config/Config'
//import { Icon } from 'react-icons-kit'
//import { useHistory } from 'react-router-dom'

export const Navbar = ({ user }) => {

    // const history = useHistory();

    // // handle logout
    // const handleLogout = () => {
    //     auth.signOut().then(() => {
    //         history.push('/login');
    //     })
    // }

    return (
        <div className='navbox'>
            <div className='leftside'>
                <img src={logo} alt="" />
            </div>
            {!user && <div className='rightside'>
                <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
            </div>}
            {/* {user && <div className='rightside'>
                <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>} */}
        </div>
    )
}

export default Navbar; 