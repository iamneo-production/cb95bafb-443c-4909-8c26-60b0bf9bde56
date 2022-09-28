import React, { useState } from 'react';
import './Login.css'
function SignUp() {
    
    const [email, setEmail] = useState('');
    const [val,setVal]=useState(false);
    const [cpassword,setcPassword]=useState('');
    const [password, setPassword] = useState('');
    const [mobile,setMobile]=useState('');
    const check=()=>{
        if (email=="" && password=="") alert("Please fill the required details");
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)===false){
            alert("You have entered an invalid email address !");
            
        }
        else if (password.length<8) alert('Password contain min 8 charcters');
        else if (password!==cpassword) alert('Passwords not Match');
        else {
        if (val===true) setVal(false);
        else setVal(true);
        alert("REGISTRATION SUCCESSFUL!!!PLEASE LOGIN..");}    
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
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} required/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} required/>

                    <h5>Confirm Password</h5>
                    <input type='password' value={cpassword} onChange={e => setcPassword(e.target.value)} required/>

                    <h5>Mobile Number</h5>
                    <input type='text' value={mobile} onChange={e => setMobile(e.target.value)} required/>
                    <a id="jj" onClick={check} href={val?"/login":"/signup"}>SignIn</a>
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

export default SignUp;