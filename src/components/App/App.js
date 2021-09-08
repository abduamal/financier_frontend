import React, { useState } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [token, setToken] = useState()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <h1>NAVBAR GOES HERE.</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
