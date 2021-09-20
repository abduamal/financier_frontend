import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import 'style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // const [token, setToken] = useState()
  //
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="App">
      <Router>
        <h1>NAVBAR GOES HERE.</h1>
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
