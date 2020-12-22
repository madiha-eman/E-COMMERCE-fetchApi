import Home from "./components/Home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AddProducts from "./components/AddProducts";
function App() {
  return (
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/addproducts' component={AddProducts}/>

  </Switch>
  
  </BrowserRouter>
  );
}

export default App;
