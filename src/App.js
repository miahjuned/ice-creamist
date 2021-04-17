import './App.css';
import Admin from './component/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import CheckOut from './component/CheckOut/CheckOut';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import Order from './component/Order/Order';
import Deals from './component/Deals/Deals';
import PrivateRoute from './component/Private Route/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <userContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <h2>email: {loggedInUser.email}</h2>
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

          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:_id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
