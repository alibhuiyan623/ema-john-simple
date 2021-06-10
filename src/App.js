
import './App.css';
import Header from './compoments/Header/Header';
import Shop from './compoments/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './compoments/Reveiw/Review';

import Inventory from './compoments/Inventory/Inventory';
import NoFound from './compoments/NoFound/NoFound';
import ProductDeatls from './compoments/ProductDeatls/ProductDeatls';


function App() {
  return (
    <div >
       <Header></Header>
      <Router>
        <Switch>

        <Route path = "/shop">
          <Shop></Shop>
          </Route>

          <Route path = "/review">
            <Review></Review>

          </Route>
          <Route path="/inventory" >
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path = "/product/:productKey">
            <ProductDeatls></ProductDeatls>

          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
