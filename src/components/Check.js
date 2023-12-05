import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Check = () => {
    const [refresh,setRefresh]=useState(true); 

    useEffect(async ()=>{
        checkAuthentication();
    },[refresh])

    const checkAuthentication = () => {
        if(localStorage.getItem('token') !== null){
            window.location = '/dashboard';
        }
        else{
            window.location = '/login';
            toast("Please login, Session Expired",{"type":"success"})
        }
    }

    return (
        <></>
    )

}


export default Check;