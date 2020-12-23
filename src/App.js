import React, { Component } from 'react'
import Home from "./components/Home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AddProducts from "./components/AddProducts";
import { ProductsContextProvider } from "./global/ProductContext";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { auth, db } from './config/Config'

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
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={() => <Home user={this.state.user} />}/>
    <Route exact path='/addproducts' component={AddProducts}/>
    <Route exact path='/signup' component={SignUp}/>
    <Route exact path='/login' component={Login}/>

  </Switch>
  </BrowserRouter>
  </ProductsContextProvider>
  );
}}

export default App;
