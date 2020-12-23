import React, { useContext } from 'react'
import { ProductsContext } from '../global/ProductContext'
import { CartContext } from '../global/CartContext'
import { motion } from 'framer-motion'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";


const Products = () => {
    const { products } = useContext(ProductsContext);

    // const data = useContext(CartContext)
    // console.log(data)

    const { dispatch } = useContext(CartContext);
    
    return (
        <>
        {products.length !== 0 && <h1>Products</h1>}
        <div className='products-container'>
            {products.length === 0 && <div>slow internet...no products to display</div>}
            {products.map(product => ( 
                <motion.div className='product-card' key={product.ProductID} 
                initial={{x: 100, y:100}}
                    animate={{x: 0, y:0}}>
                
                               <AnimateSharedLayout type="crossfade">
                               <AnimatePresence>
                   
                    <motion.div className='product-img' whileHover={{opacity: 1}}>
                        <motion.img src={product.ProductImg} alt="not found" 
                        initial={{opacity: 0}}
                        animate={{opacity: 1 }}
                        transition={{delay: 2 }}
                        transition={{duration: 5 }}/>
                    </motion.div>
                    </AnimatePresence>
                    </AnimateSharedLayout>
                    <div className='product-name'>
                        {product.ProductName}
                    </div>
                    <div className='product-price'>
                        Rs {product.ProductPrice}.00
                </div>
                    <button className='addcart-btn'  onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                </motion.div>
            ))}
        </div>
    </>
    )
}

export default Products
