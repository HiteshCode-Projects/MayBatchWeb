import React from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    function HandleLogin(){
        alert('Login Successfully')

        navigate('/home')
    }



  return (
    <div>
      <h1>Login Page</h1>


      <button onClick={HandleLogin}>Login</button>
    </div>
  )
}

export default Login
