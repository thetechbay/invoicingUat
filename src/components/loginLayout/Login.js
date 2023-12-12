import React ,{useEffect, useState} from "react";
// import './login.css'
import signIn, { authenticate, isAuthenticated } from '../../auth/loginAPI';
import { Redirect } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Navigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import Axios from "axios";
import {API} from '../../API';


const Login = () => {
    
    const [values, setValues] = useState({
        email : "",
        password: ""
    });


    const delay = ms => new Promise(res => setTimeout(res, ms));
    const {email,password} = values;
    const responseMessage = async(response) => {
        console.log("googe",response);
        
        const cred = response.credential;
        console.log(cred);
        if(cred !==""){
            const decoded = jwtDecode(cred);
            console.log("decoded", decoded);
            var status = ShareDatatoBackend(decoded);
            await delay(3000);
            console.log(status,"stat");
            // if(status === "true")
            //     window.location ='/dashboard'
            // else toast("error")
        }
        else{
            toast("Login Failed, please re-try")
        }
        
    };

    useEffect( () => {
        checkAuthentication();
    },[])

    const checkAuthentication = () => {
        console.log(localStorage.getItem("token"));
        if (localStorage.getItem("token")) {
          console.log("token exist krra");
          window.location = '/dashboard';
        } 
      };

    const ShareDatatoBackend =(data) => {
        const networkData = {}
        networkData['email'] = data.email;
        networkData['email_verified'] = data.email_verified;
        networkData['family_name'] = data.family_name;
        networkData['given_name'] = data.given_name;
        if(data.picture !== ''){
            networkData['picture'] = data.picture;
        }
        Axios.post(`${API}/authentication_data`,
			(networkData),
			).then(response=>{
            console.log(response.data.company);
            if(response.data.token!== undefined){
                localStorage.setItem("token",response.data.token)
                localStorage.setItem("customer_unique",response.data.customer.customer_unique)
                localStorage.setItem('sale_count',response.data.sales_count)
                localStorage.setItem('clients_count', response.data.clients_count)
                localStorage.setItem('company_count',response.data.company_count)
                localStorage.setItem('user_count',response.data.user_count)
                localStorage.setItem('user_name', response.data.user_data)
                localStorage.setItem('sales_total', response.data.sales_total)
                localStorage.setItem('sales_paid',response.data.sales_paid)
                localStorage.setItem('sales_remaining', response.data.sales_remaining)
                
                toast("Saved, authentication Successfull",{type:"success"})
                delay(3000);
                window.location = '/dashboard'
            }
            else{
                toast(response.data.error)
            }
        }).catch(error=>{
                console.log(error)
                toast("Error",{type:"error"})
                return false;
        })
    }



    const successMessage = () => {
        return (
            toast('Login Successfull')
        );
    }
    const errorMessage = () => {
        return (
            toast('Error Occured')
        );
    }

    const handleChange = (name) => 
        (event) => {
            setValues({...values,[name]:event.target.value});
        }
    

    return (
        <section className="container-fluid" id="login">
            <ToastContainer />
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row justify-content-center">
                <div className="card-man">
                    <div className="card-body pt-5">
                        <div className="row align-items-center text-center">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                <img src="../../../static/images/logo.png" className="img-fluid logo-img" />
                                <h4 className="text-white text-center text-uppercase pt-2 pr-5">Invoicing Portal</h4>
                                
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 ml-auto">
                            <GoogleOAuthProvider clientId="860482418752-vchd3om87tep6iel0r1k318i6i091b8r.apps.googleusercontent.com">
                                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                            </GoogleOAuthProvider>
                            </div>
                            
                            {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">

                                <form onSubmit={onSubmit}>
                                    <h1 className="text-black text-center text-uppercase p-4">LOGIN</h1>
                                    <div className="form-row">
                                        <input type="email" value={email} onChange={handleChange('email')} className="form-control my-xl-3 my-3 p-3" id="email" name="email" required placeholder="Email" />

                                    </div>
                                    <div className="form-row">
                                        <input type="password" value={password} onChange={handleChange('password')} className="form-control my-xl-3 my-3 p-3" id="password" name="password" required placeholder="Password" />
                                    </div>
                                    <div className="text-center my-3">
                                        <button onClick={onSubmit}className="btn btn-primary btn1 my-5">Login</button>
                                    </div>
                                   
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    );
    
}

export default Login;