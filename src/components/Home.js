import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../config/Config'
import '../css/Home.css'
import Navbar from './Navbar'
import Products from './Products'

const Home = ({user}) => {
   
    return (
        <div className='wrapper'>
            <Navbar user={user}/>
           <Products />
        </div>
    
    )
}

export default Home
