import React, { useState } from 'react'
import Login from '../Login/Login'

function Authentication() {

  const [token, setToken] = useState()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return(
    <div>

    </div>
  )

}

export default Authentication
