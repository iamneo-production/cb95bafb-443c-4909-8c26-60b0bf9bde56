import React,{useState,useEffect} from "react";
import './login.css';
import Image from "./images/vege1.jpg";
import { Link } from "react-router-dom";

const Login = () => {

    const [email,setEmail] = useState("");
    const [passwd,setPasswd] = useState("");
    const [condition,setCondition] = useState("");
    let alertMessage = "Please fill the valid credentials !!";

    const validateCredentials = (e) => {
        e.preventDefault();

        if(email === "" || passwd === "")
        {
            setCondition(true);
            alertMessage = "Cannot leave field empty !! ";
            // console.log(condition);
            // console.log(alertMessage);
            // console.log(email);
            // console.log(passwd);
        }
    }

    return (
        <div className="container" id="loginBox"  >
            <h1 className="heading" > Login </h1>
            <div className="main-div">
                <div className="login-box flex-col" id="loginFields" >
                  <form className="flex-col" onSubmit = { validateCredentials } >
                    <input  type="email" className="input-field mr-1" id="email" placeholder="Enter email" 
                    value={email} onChange={ (e) => {setEmail(e.target.value)}}/>
                    <input type="password" className="input-field mr-1" id="password" placeholder="Enter Password"
                    value={passwd} onChange={ (e) => {setPasswd(e.target.value)}}/>

                    <button type="submit" className="btn btn-indigo mr-1" id="loginButton"> Login </button>
                
                    <p className="info-link" > New User ? <span className="signup-link" id="signup-link" >  <Link to="/registration" >Sign Up </Link>  </span> </p>
                    
                    <h3 className="alert-style">
                    {  (condition) ? alertMessage : "" }
                    </h3>
                  </form>

                </div>
            
                <div className="img-box" >
                    <img src={Image}  height="480" width="850"  className="img"/>
                </div>
            </div>
        </div>
    );
}

export default Login;