import React, { useContext } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { auth } from '../config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../global/CartContext'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const Navbar = ({ user }) => {

    const { totalQty } = useContext(CartContext);

    const history = useHistory();

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <AppBar position="fixed">
             <Toolbar  className='rightside'>
        <div className='navbox'>
               
            <div className='leftside'>
                <img src={logo} alt="" />
            </div>
            <div>
                <Link to='/' className='navlink home'>Home</Link>
            </div>
            {!user && <div className='rightside'>
                <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
            </div>}
            {user && <div className='rightside'>
            <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                <div className='relative' ><span className='no-of-products'>{totalQty}</span></div>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
            
         
          
        </div>
        </Toolbar>
        </AppBar>
    )
}

export default Navbar; 