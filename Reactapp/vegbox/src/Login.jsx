import React, { useState } from 'react';
import './Login.css'
function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='main'>
        <div className="out">
            <img src="https://images5.alphacoders.com/399/thumbbig-399098.webp"></img>
        </div>
        <div className='login'>
            <div className='login__container'>
                <h1>Customer Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <a id="jj" href="/">Sign In</a>
                </form>

                <p>
                    By signing-in you agree to the Vegbox Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <a href="/signup"><button className='login__registerButton'>Create your Vegbox Account</button></a>
                <a href="/admin">Go To Admin Login</a>
            </div>
        </div>
        </div>
    )
}

export default Login