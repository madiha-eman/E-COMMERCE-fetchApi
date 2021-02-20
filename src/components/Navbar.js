import React, { useContext } from 'react'
import logo from '../images/shoplogo.png'
import { Link } from 'react-router-dom'
import { auth } from '../config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../global/CartContext'
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
    window.addEventListener('scroll', function () {
        let header = document.querySelector('header');
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('scrolling-active', windowPosition);
    })

    return (
        <header>
        {/* <AppBar position="fixed" className='appbar'> */}
             <Toolbar  className='rightside'>
        <div className='navbox'>
               
            <div className='leftside'>
                <img src={logo} alt=""  />
                <div className='home0'>
                <Link to='/' className='navlink home'>E-Shop</Link>
            </div>
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
        {/* </AppBar> */}
        </header>
    )
}

export default Navbar; 