import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Background from '../../components/auth/Background'
import Header from '../../components/auth/Header'
import './style/LoginStyle.css'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { loginStudent } from '../../features/auth/loginSlice'
import { userLogin } from '../../features/user/userSlice'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const nav = useNavigate()
    const [index, setIndex] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const loginUser = async () => {
        const toastId = 1;
        const dataId = 2;
        toast.loading('Login User...', { toastId })
        const resp = await dispatch(loginStudent({ 'stu_index': index, 'password': password })).unwrap()
        toast.dismiss(toastId)
        if (resp['status'] === false) {
            toast.error(resp['msg'], { toastId: dataId })
            return;
        }
        const { accessToken, refreshToken } = resp['data']
        localStorage.setItem('user', JSON.stringify({ accessToken, refreshToken }))
        dispatch(userLogin({ accessToken, refreshToken }));
        nav('/')
        toast.success(resp['msg'])
    }


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
                                    <Form.Control value={index} onChange={(e) => { setIndex(e.target.value) }} id='index' />
                                </Form.Group>
                                <Form.Group style={{ width: '100%' }}>
                                    <Form.Label htmlFor='password'>Password</Form.Label>
                                    <Form.Control id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                </Form.Group>
                                <Form.Group style={{ width: '100%' }}>
                                    <Button onClick={loginUser} style={{ width: '100%', backgroundColor: 'var(--green-500)', border: 'none', outline: 'none' }}>Login</Button>
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