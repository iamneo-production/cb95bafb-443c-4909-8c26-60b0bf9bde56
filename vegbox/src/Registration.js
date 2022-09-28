import React,{useState, useEffect} from "react";
import './registration.css';
import Image from "./images/vege2.jpg";
import { Link } from "react-router-dom";

const Registration = () => {

    const initialValues = { username : "", email : "", password : "", confirmPassword : "", mobileNumber : "", };
    const [formValues,setFormValues] = useState(initialValues);
    const [errors,setErrorValue] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);

    const handleClick = (e) => {

        // console.log(e.target);
        const {id, value} = e.target;
        
        setFormValues({ ...formValues, [id]:value})
        // console.log([id]);
        // console.log(value);

        // // console.log([id]);
        // console.log(formValues);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmit)
            console.log(formValues);
        else{
            console.log("unsuccesssfull");
        }
    },[errors])

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorValue(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
   
     const errors = {};

       const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
       const unameregex = /^[a-zA-Z0-9]+$/; //username regex
       const mobileregex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i  //mobileNumber regex

       if(!values.username)
            errors.username  = "Username is required !!";
       else if(!unameregex.test(values.username))
            errors.username = "Username must be alpha-numeric !!";

       if(!values.email)
            errors.email = "Email is required !!";
       else if(!emailregex.test(values.email))
            errors.email = "Please! Enter a valid email-id.";

       if(!mobileregex.test(values.mobileNumber))
            errors.mobileNumber = "Mobile number must contain only integer literals !!"
       else if(values.mobileNumber.length != 10)
            errors.mobileNumber = "Mobile number must be of 10 digits."

       if(!values.password)
            errors.password = "Password is required !!";
       else if(values.password < 8)
            errors.password = "Password length must be greater than 8 !!";
       if(values.password!==values.confirmPassword)
            errors.confirmPassword = "Your Confirm Password do not match with Password given";
        
       console.log(errors);

       return errors;
    }

    return (
        <div className="container" id="loginBox" onSubmit={ handleSubmit} >
            <h1 className="heading" > Register </h1>
            <div className="main-div">
                <div className="regis-box flex-col" id="loginFields" >
                <h2 className="heading-2" > Sign Up </h2>
                  <form className="flex-col" >

                    <input  type="email" className="input-field" id="email" placeholder="Enter email" 
                    value={formValues.email} onChange={ handleClick }/>
                    <br/><span className="error-info mb-1"> {errors.email} </span>

                    <input type="text" className="input-field" id="username" placeholder="Enter Username"
                    value={formValues.username} onChange={ handleClick }/>
                    <br/><span className="error-info mb-1"> {errors.username} </span>

                    <input  type="number" className="input-field" id="mobileNumber" placeholder="Enter Mobilenumber" 
                    value={formValues.mobileno} onChange={ handleClick }/>
                    <br/><span className="error-info mb-1"> {errors.mobileNumber} </span>

                    <input type="password" minLength={8} className="input-field" id="password" placeholder="Enter Password"
                    value={formValues.passwd} onChange={ handleClick }/>
                    <br/><span className="error-info mb-1"> {errors.password} </span>

                    <input  type="password" minLength={8} className="input-field" id="confirmPassword" placeholder="Confirm Password" 
                    value={formValues.conPasswd} onChange={ handleClick }/>
                    <br/><span className="error-info mb-1"> {errors.confirmPassword} </span>

                    <button type="submit" className="btn btn-indigo mr-1" id="submitButton"> Submit </button>
                
                    <p className="info-link" > Already a user ? <span className="signIn-link" id="signInLink" >  <Link to="/"> Login </Link>  </span> </p>
                    </form>

                </div>
            
                <div className="img-box" >
                    <img src={Image}  height="480" width="850"  className="img"/>
                </div>
            </div>
        </div>
    );
}

export default Registration;