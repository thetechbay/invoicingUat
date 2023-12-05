// import {API} from '../API';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import {API} from '../API';

// const signUp = user => {
//     return fetch(`${API}accounts/login`,{
//         method:"POST",
//         header: {
//             Accept: "application/json",
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify(user)
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .catch(
//         err => {console.log(err)}
//     )
// }


const signIn = user => {
    const data = {
        "username":user['email'],
        "password":user['password']
    }
    console.log(data,API);  
    // console.log(formData.keys());  
    // return Axios.post('http://localhost:8000/api/gettoken/',data)
    return fetch(`${API}/auth/gettoken/`,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        // url : 'http://oneportal.pythonanywhere.com/auth/gettoken/',
        body: JSON.stringify(data),
    })
    .then((response) => {
        console.log("gali kakuua",response)
        response.json();
        console.log("toekn",response.token)
        if(response.token){
            localStorage.setItem("token",response.token)
            return true;
        }
       
        else{
           return false;
        }
        return response.json();
    })
    .catch(
        err => {console.log(err)}
    )
}

export const authenticate = (data) => {
    if(typeof window !== undefined){
        if(localStorage.getItem('Token')){
            var grp=localStorage.getItem('group');
            console.log(grp)
            switch(grp){
                case 'faculty':
                    window.location="/faculty/dashboard";
                    break;
                case 'student':
                    window.location="/student/dashboard";
                    break;
                case 'admission':
                    window.location="/admission/dashboard";
                    break;
                case 'sub_registrar':
                    window.location="/sub_registrar/dashboard";
                    break;
                case 'coe':
                    window.location="/coe/dashboard";
                    break;
                case 'hod':
                    window.location="/hod/dashboard";
                    break;
                default:
                    console.log("Ni Ladiyo");
                    window.location="/";
            }
            

        }else{
        console.log(data)
        localStorage.setItem('Token', (data.token));
        localStorage.setItem('group', (data.group[0].name));
        localStorage.setItem('Name', (data.info.first_name+" "+data.info.last_name));
        localStorage.setItem('email', (data.info.email));
        console.log("hogyi set");
        console.log(localStorage.getItem('Name'))
        console.log(data.group)
        switch(data.group[0].name){
            case 'faculty':
                window.location="/faculty/dashboard";
                break;
            case 'student':
                window.location="/student/dashboard";
                break;
            case 'admission':
                window.location="/admission/dashboard";
                break;
            default:
                console.log("Ni Ladiyo");
                window.location="/";
        }
        // window.location = "/faculty/dashboard";
        // next();
    }
    }else
    {
        console.log("lund");
    }
}

export const isAuthenticated = () => {
    // if(typeof window == undefined){
    //     return false;
    // }
   var Token = localStorage.getItem('Token')
   console.log(Token, typeof Token)
    if(Token === "undefined") {
        // console.log("mc")
        localStorage.removeItem('Token')
        return isAuthenticated()
    }
    if(localStorage.getItem('Token') !== "undefined"){
        console.log(localStorage.getItem('Token'));
        return (localStorage.getItem('Token'));

    }
    else{
        localStorage.removeItem('Token');
        return false;
    }
}

export const logout = next =>{
    const userId = isAuthenticated() && isAuthenticated().user.id

    if(typeof window !== undefined){
        localStorage.removeItem('Token');
        next();

        return fetch(`${API}/accounts/logout/${userId}`, {
            method:"GET",
        })
        .then(response => {
            console.log("Success");
            next();
        })
        .catch(err => {console.log(err)});
    }
}

export default signIn;