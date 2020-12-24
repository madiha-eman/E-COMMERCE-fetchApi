import React, { Component } from 'react'
import Home from "./components/Home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AddProducts from "./components/AddProducts";
import { ProductsContextProvider } from "./global/ProductContext";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { auth, db } from './config/Config'
import { CartContextProvider } from './global/CartContext';
import { Cart } from './components/Cart';
import { Cashout } from './components/Cashout'
import { NotFound } from './components/Notfound'

export class App extends Component{
    state = {
        user: null,
    }
    componentDidMount() {

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    this.setState({
                        user: snapshot.data().Name
                    })
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })
    
    }
    
    
    
render(){
  return (
    <ProductsContextProvider>
      <CartContextProvider>
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={() => <Home user={this.state.user} />}/>
    <Route exact path='/addproducts' component={AddProducts}/>
    <Route exact path='/signup' component={SignUp}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/cartproducts' component={() => <Cart user={this.state.user}/>}/>
    <Route path='/cashout' component={() => <Cashout user={this.state.user} />} />
     <Route component={NotFound} />

  </Switch>
  </BrowserRouter>
  </CartContextProvider>
  </ProductsContextProvider>
  );
}}

export default App;
