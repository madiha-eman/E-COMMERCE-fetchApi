import React, { useContext,useState, useEffect } from 'react'
// import { ProductsContext } from '../global/ProductContext'
import { CartContext } from '../global/CartContext'
import { motion } from 'framer-motion'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { heart } from 'react-icons-kit/entypo/heart'
import Axios from 'axios'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";


const Products = () => {
    // const { products } = useContext(ProductsContext);

    // const data = useContext(CartContext)
    // console.log(data)

    const { dispatch } = useContext(CartContext);
       const [product, setproduct] = useState([])
    useEffect(() => {
        Axios.get('https://fakestoreapi.com/products').then(res => {
            console.log(res.data.product)
            setproduct(res.data);
         })
        
    }, [])
    console.log(product)
    
    return (
        <>
        {product.length !== 0 && <h1>Products</h1>}
        <div className='products-container'>
            {product.length === 0 && <div>slow internet...no products to display</div>}
            {product.map(product => ( 
                <motion.div className='product-card' key={product.ProductID} 
                initial={{x: 100, y:100}}
                    animate={{x: 0, y:0}}
                    >
                
                               <AnimateSharedLayout type="crossfade">
                               <AnimatePresence>
                   
                    <div className='product-img'>
                        <img src={product.image} alt="not found" 
                        // initial={{opacity: 0}}
                        // animate={{opacity: 1 }}
                        // transition={{delay: 2 }}
                        // transition={{duration: 5 }}
                        />
                    </div>
                    </AnimatePresence>
                    </AnimateSharedLayout>
                    <div className='product-name'>
                        {product.title}
                    </div>
                    <div className='product-btn'>
                    <span href='#' className='product-price'>
                        $ {product.price}
                     </span>
                    <span className='addcart-btn'  onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}><Icon icon={cart} /></span>
                    <span className='addcart-btn'><Icon icon={heart} /></span>
                    </div>
                </motion.div>
            ))}
           
        </div>
    </>
    )
}

export default Products
