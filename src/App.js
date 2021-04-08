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

function App() {
  return (
    <Router className="App">
       <Switch>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
