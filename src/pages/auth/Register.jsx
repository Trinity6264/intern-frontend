import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Background from '../../components/auth/Background'
import Header from '../../components/auth/Header'
import '../auth/style/RegisterStyle.css'
import { useDispatch, } from 'react-redux'
import { toast } from 'react-toastify'
import { verifyStudent } from '../../features/auth/verifySlice'
import { registerStudent } from '../../features/auth/registerSlice'
import { useNavigate } from 'react-router-dom'



const Register = () => {
    const nav = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [read, setRead] = useState(false);
    const [index, setIndex] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()



    const checkIndexNumber = async () => {
        const toastId = 1;
        toast.loading('Fetching user...', { toastId })
        const resp = await dispatch(verifyStudent({ 'stu_index': index })).unwrap()
        toast.dismiss(toastId)
        if (resp['status'] === false) {
            toast.error(resp['msg']);
            return;
        }
        console.log(resp);
        toast.success(`${resp['msg']}`)
        setShowPassword(true);
        setRead(true)
    }
    const registerUser = async () => {
        const toastId = 1;
        toast.loading('Register user...', { toastId })
        const resp = await dispatch(registerStudent({ 'stu_index': index, 'password': password })).unwrap()
        toast.dismiss(toastId)
        if (resp['status'] === false) {
            toast.error(resp['msg']);
            return;
        }
        toast.success(`${resp['msg']}`)
        nav('/login', { replace: true })


    }


    return (
        <div className='register'>
            <Background />
            <Container>

                <section className='content'>
                    <Header login />
                    <div className="auth-wrapper">
                        <div className="register-text-info">
                            <h1>Welcome To Aamusted Student  Internship Portal</h1>
                            <h4> Enter your credentials for verification</h4>
                        </div>
                        <div className="login-form" style={{
                            gridTemplateColumns: showPassword ? '1fr 1fr' : '2fr 1fr'
                        }}>
                            <input value={index} onChange={(e) => setIndex(e.target.value)} type="text" readOnly={read} placeholder='Index Number' name='index' style={{
                                color: read ? 'gray' : null
                            }} />
                            {showPassword && <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='New Password' name='index' />}
                            {!showPassword && <button onClick={() => { checkIndexNumber() }}>Get started</button>}
                        </div>
                        {showPassword && <button onClick={() => registerUser()}>Register</button>}
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default Register