import React from 'react'
import './style/HeaderStyle.css'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const nav = useNavigate();
  return (
    <Container className='d-flex justify-content-end head'>
      <button onClick={() => props.login ? nav('/login') : nav('/register')}>
        {props.login ? 'Login' : 'Register'}
      </button>
    </Container>
  )
}

export default Header