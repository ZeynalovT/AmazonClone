import React, { useState, useEffect } from 'react'
import AmazonLogo from '../../Amazon_Logo.png'
import './register.css'
import { NavLink, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {

        history.push('/')
      
    })
    .catch(error => alert(error.message))

  };




  return (
    <div className='login'>
      <NavLink to='/'><img src={AmazonLogo} className='login-logo' alt='logo' /></NavLink>

      <div className='login-container'>
        <h1>Create new account</h1>
          <form onSubmit={onSubmit}>
            <h5>E-Mail</h5>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'  className='login-signIn'>Create new account</button>
          </form>
          <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      </div>

          <p>New to Amazon?</p>
          <NavLink to='/login'>
            <button className='login-register'>Already have an account?</button>
          </NavLink>

    </div>
  )
}

export default Register
