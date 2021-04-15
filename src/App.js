import logo from './logo.svg';
import './App.css';
import Admin from './component/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import CheckOut from './component/CheckOut/CheckOut';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import Order from './component/Order/Order';
import Deals from './component/Deals/Deals';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <userContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/deals">
            <Deals></Deals>
          </Route>

          <Route path="/order">
            <Order></Order>
          </Route>
          
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/checkout/:_id">
            <CheckOut></CheckOut>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
