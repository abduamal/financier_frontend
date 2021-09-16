import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
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
      <h1>NAVBAR GOES HERE.</h1>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
