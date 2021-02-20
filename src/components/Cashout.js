import React, { useState, useEffect, useContext } from 'react'
import { auth, db } from '../config/Config'
import { CartContext } from '../global/CartContext'
import { Navbar } from './Navbar';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../css/Home.css'

export const Cashout = (props) => {

    const history = useHistory();

    const { shoppingCart, totalprice, totalQty, dispatch } = useContext(CartContext);

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);
                })
            }
            else {
                history.push('/login')
            }
        })
    })

    const cashoutSubmit = (e) => {
        e.preventDefault();
        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('Buyer-info ' + user.uid).doc('_' + time).set({
                    BuyerName: name,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalprice,
                    BuyerQuantity: totalQty
                }).then(() => {
                    db.collection('Buyer-info ' + user.uid).onSnapshot(snapshot => {
                        let changes = snapshot.docChanges();
                        changes.forEach(change => {
                            if (change.type === 'added') {
                                shoppingCart.forEach(cart => {
                                    db.collection(user.uid + change.doc.id).add(cart).then(() => {
                                        setCell('');
                                        setAddress('');
                                        dispatch({ type: 'EMPTY' })
                                        setSuccessMsg('Your order has been placed successfully. Thanks for visiting us');
                                    }).catch(err => setError(err.message))
                                })
                            }
                        })
                    })
                }).catch(err => setError(err.message))
            }
        })
    }

    return (
        <>
            <Navbar user={props.user} />
            {error && <span>{error}</span>}
            <div className='container-2'>
                <br />
                <h2 className='h1'>Cashout Details</h2>
                <br />
                {successMsg && <div className='success-msg'>{successMsg} <Link to="/" className='home-link'>Return to HOME</Link></div>}
                <form autoComplete="off" className='form-group' onSubmit={cashoutSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' required
                        value={name} disabled />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                        value={email} disabled />
                    <br />
                    <label htmlFor="Cell No">Cell No</label>
                    <input type="number" className='form-control' required
                        onChange={(e) => setCell(e.target.value)} value={cell} placeholder='eg 03123456789' />
                    <br />
                    <label htmlFor="Delivery Address">Delivery Address</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setAddress(e.target.value)} value={address} />
                    <br />
                    <label htmlFor="Price To Pay">Price To Pay</label>
                    <input type="number" className='form-control' required
                        value={totalprice} disabled />
                    <br />
                    <label htmlFor="Total No of Products">Total No of Products</label>
                    <input type="number" className='form-control' required
                        value={totalQty} disabled />
                    <br />
                    <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button>
                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
        </>
    )
}