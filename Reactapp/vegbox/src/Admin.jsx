import React, { useState } from 'react';
import './Login.css'
function Admin() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dothis=()=>{
        console.log("logged in");
    }
    return (
        <div className='main'>
        <div className="out">
            <img src="https://images5.alphacoders.com/399/thumbbig-399098.webp"></img>
        </div>
        <div className='login'>
            <div className='login__container'>
                <h1>Admin Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <a id="jj" href="/adminmod">SignIn</a>
                </form>

                <p>
                    By signing-in you agree to the Vegbox Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
            </div>
        </div>
        </div>
    )
}

export default Admin