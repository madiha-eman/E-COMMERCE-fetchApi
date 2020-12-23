import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../config/Config'
import '../css/Home.css'
import Navbar from './Navbar'
import Products from './Products'

const Home = ({user}) => {
    const history = useHistory();

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })
    return (
        <div className='wrapper'>
            <Navbar user={user}/>
           <Products />
        </div>
    
    )
}

export default Home
