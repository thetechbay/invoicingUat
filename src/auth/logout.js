
import {  Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Logout = () => {

    localStorage.clear();
    toast("Logout successfull");
    window.location='/'
}



export default Logout;