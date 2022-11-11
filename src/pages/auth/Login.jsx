import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Background from '../../components/auth/Background'
import Header from '../../components/auth/Header'
import './style/LoginStyle.css'

const Login = () => {
    return (
        <section className='login'>
            <Background />
            <Container>
                <div className="content">
                    <Header />
                    <div className="auth-wrapper">
                        <div className="login-auth-wrapper">
                            <h1>Login</h1>
                            <Form style={{
                                display: 'flex',
                                width: '100%',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                gap: '2rem'
                            }}>
                                <Form.Group style={{ width: '100%' }}>
                                    <Form.Label htmlFor='index'>Index Number</Form.Label>
                                    <Form.Control id='index'></Form.Control>
                                </Form.Group>
                                <Form.Group style={{ width: '100%' }}>
                                    <Form.Label htmlFor='password'>Password</Form.Label>
                                    <Form.Control id='password'></Form.Control>
                                </Form.Group>
                                <Form.Group style={{ width: '100%' }}>
                                    <Button style={{ width: '100%', backgroundColor: 'var(--green-500)',border: 'none',outline:'none' }}>Login</Button>
                                </Form.Group>

                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Login