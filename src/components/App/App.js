import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Homepage from '../Homepage/Homepage'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Navbar from '../Navbar/Navbar'
import 'style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withAuth from "../Auth/withAuth.js";
import AccountsContainer from '../Account/AccountsContainer.js'

class App extends React.Component {

  // componentDidMount() {
  //   fetch(`http://localhost:3001/users/${user_id}/accounts`)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  render(){
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/dashboard" component={withAuth(Dashboard)}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/account" component={withAuth(AccountsContainer)}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
