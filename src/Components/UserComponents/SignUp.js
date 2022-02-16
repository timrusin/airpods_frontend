import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './AuthPages.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:8000/api/signup', {
          email: email,
          password: password
      })
      navigate('/signin', { replace: true })
      setEmail('')
      setPassword('')
  }

  const handleEmailChange = (e) => {
      e.preventDefault()
      setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
      e.preventDefault()
      setPassword(e.target.value)
  }

  return (
    <Container>
      <div className='center-everything'>
      
          <form className="signup" onSubmit={handleSubmit}>
            <h5>Please register with an email address and password below</h5>
              <input type='text' placeholder='Email Address' value={email} onChange={handleEmailChange}></input> 
              <input type='text' placeholder='Password' value={password} onChange={handlePasswordChange}></input> 
              <input type='submit' value='Sign Up'></input>
          </form>
          
      </div>
    </Container>
  ) 
}

export default SignUp