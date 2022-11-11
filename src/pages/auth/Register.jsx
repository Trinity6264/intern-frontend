import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Background from '../../components/auth/Background'
import Header from '../../components/auth/Header'
import '../auth/style/RegisterStyle.css'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
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
                            <input type="text" placeholder='Index Number' name='index' />
                            {showPassword && <input type="password" placeholder='Password' name='index' />}
                            {!showPassword && <button onClick={() => setShowPassword(true)}>Get started</button>}
                        </div>
                        {showPassword && <button>Register</button>}
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default Register