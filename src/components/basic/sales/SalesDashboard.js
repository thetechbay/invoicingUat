import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
// import './dashboard.css';
import { Link } from "react-router-dom";
import Axios from "axios";
import {API} from '../../../API'
import TableComponent from "../TableComponent";



const delay = (ms) => new Promise((r) => setTimeout(r, ms)); // helper func



const Dashboard = () => {
  const [refresh, setRefresh] = useState(true);
  const [sales, setSales] = useState([]);
  const iterator = useRef();
  // const intervalRef = useRef();
  const [, forceUpdate] = React.useReducer(o => !o);

  
  useEffect( () => {
    // getRecentSales();

  }, []);


  const checkAuthentication = () => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      console.log("token exist krra");
      // window.location = '/dashboard';
    } else {
      toast("Please login, Session Expired", { type: "success" });
      window.location = "/login";
    }
  };

  const passSomeTime = () => {
    setTimeout( ()=> {
      console.log("passing some time")
    },2000)
    console.log(sales)
  }

  // const getRecentSales = async() => {
  //   setRefresh(true);
  //   let res = await Axios.get(`${API}/get_recent_sales`,{headers:{"Authorization" : "Token "+localStorage.getItem('token')}})
  //   if(res.data) return res.data;
  // }


  const re_fresh=()=>{
    setRefresh(!refresh)
  }



  if(sales != []){
    return (
      <div onLoad={forceUpdate}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                  <Link
                    to="#"
                    className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border"
                  >
                    Socrates
                  </Link>
                  <div className="bottom-border pb-3">
                    {/* <img src="images/admin.jpeg" width="50" className="rounded-circle mr-3"> */}
                    <Link to="#" className="text-white">
                      {localStorage.getItem("user_name")}
                    </Link>
                  </div>
                  <ul className="navbar-nav flex-column mt-4">
                  <li className="nav-item">
                      <Link
                        to="/"
                        className="nav-link text-white"
                      >
                        <i className="fas fa-home text-light mr-2"></i>Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/dashboard/sales/createInvoice"
                        className="nav-link text-white current"
                      >
                        <i className="fas fa-home text-light mr-2"></i>Sale
                        Invoice
                      </Link>
                    </li>
                   
                  </ul>
                </div>
  
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                  <div className="row align-items-center">
                    <div className="col-md-9">
                      <Link to='/dashboard/sales/createInvoice'><button class="btn btn-outline-warning rounded"> Add Sales</button></Link>
                    </div>
                    <div className="col-md-3 ml-auto">
                      <ul className="navbar-nav">
                        <li className="nav-item ml-md-auto">
                          <Link to="/logout" className="nav-link text-white">
                            <i className="fas fa-sign-out-alt text-danger fa-lg"></i>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div className="row pt-md-5 mt-md-3 mb-5">
                  <div className="col-xl-3 col-sm-6 p-2">
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fas fa-users fa-3x text-info"></i>
  
                          <div className="text-right text-primary">
                            <h5>Clients</h5>
                            <h3>{localStorage.getItem('clients_count')}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fas fa-sync mr-3"></i>
                        <span>Updated Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 p-2">
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fas fa-money-bill-alt fa-3x text-success"></i>
                          <div className="text-right text-warning">
                            <h5>Total Sales Amount</h5>
                            <h3>{localStorage.getItem('sales_total')}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fas fa-sync mr-3"></i>
                        <span>Updated Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 p-2">
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fas fa-shopping-cart fa-3x text-warning"></i>
                          <div className="text-right text-success">
                            <h5>Amount received</h5>
                            <h3 className="text-success">+{localStorage.getItem('sales_paid')}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fas fa-sync mr-3"></i>
                        <span>Updated Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 p-2">
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fas fa-message fa-3x text-danger"></i>
                          <div className="text-right text-danger">
                            <h5>Amount Remaining</h5>
                            <h3>-{localStorage.getItem('sales_remaining')}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fas fa-sync mr-3"></i>
                        <span>Updated Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <TableComponent/>
  
        
        
      </div>
    );
  }
  else{
    <div>Loading</div>
  }

};

export default Dashboard;
