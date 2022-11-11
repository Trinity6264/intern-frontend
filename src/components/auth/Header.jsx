import React from 'react'
import './style/HeaderStyle.css'
import Logo from '../../assets/imgs/logo.png'
import { Container } from 'react-bootstrap'

const Header = (props) => {
  return (
    <Container className='d-flex justify-content-end head'>
        <button>{props.login ? 'Login' : 'Register'}</button>
    </Container>
  )
}

export default Header