import React, {useState} from 'react'

const AddProducts = () => {
    const [productName, setProductName]= useState('');
    const [productPrice, setProductPrice]= useState(0);
    const [productImg, setProductImg]= useState(null);
    const [error, setError]= useState('');

    return (
        <div>
             <div className='container'>
            <br />
            <h2>Add Products</h2>
            <hr />
            <form autoComplete ='off' className='form-group'>
            <label htmlFor='product-name'>Product Name</label>
            <br />
            <input type='text' className='form-control' required />
            <br />
            <label htmlFor='product-price'>Product Price</label>
            <br />
            <input type='number' className='form-control' required />
            <br />
            <label htmlFor='product-img'>Product Image</label>
            <br />
            <input type='file' className='form-control' />
            <br />
            <button className='btn btn-success btn-md mybtn'>ADD</button>
            </form>
            {error && <span>{error}</span>}
            
        </div>
        </div>
    )
}

export default AddProducts
