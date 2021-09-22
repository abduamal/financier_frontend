import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Homepage from '../Homepage/Homepage'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Navbar from '../Navbar/Navbar'
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
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
