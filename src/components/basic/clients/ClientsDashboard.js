import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
// import './dashboard.css';
import { Link } from "react-router-dom";
import Axios from "axios";
import {API} from '../../../API'
import TableComponent from "../TableComponent";
import $ from 'jquery';


const delay = (ms) => new Promise((r) => setTimeout(r, ms)); // helper func

const Dashboard = () => {
  const [refresh, setRefresh] = useState(true);
  const [clients, setClients] = useState([]);
  const [company, setCompany] = useState([])
  const [formData, setFormData] = useState()
  const iterator = useRef();
  const [, forceUpdate] = React.useReducer(o => !o);

  
  useEffect( () => {
    checkAuthentication();
    getRecentSales();
    get_company();

  }, []);

  const hideModal = () => {
    $("#addClientModal").modal("hide");
  };


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

  const get_company = async() => {
    const client_unique = localStorage.getItem('customer_unique');
    let res = await Axios.get(`${API}/get_company/${client_unique}`,{headers:{"Authorization" : "Token "+localStorage.getItem('token')}})
    setCompany(res.data);
  }

  const handleSubmit = async(e) => {
    console.log("call")
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    e.preventDefault();
    var obj = {}
    for (let [key, value] of formData.entries()) {
        obj[key] = value;
    }
    console.log(obj);
    let res = await Axios.post(`${API}/save_client_data`,obj,{headers:{"Authorization" : "Token "+localStorage.getItem('token')}})
    console.log("data after submit",res.data)
    $("#close_modal").click();
    
    delay(3000);
    console.log("calling toast")
    toast(res)



  }

  const getRecentSales = async() => {
    setRefresh(true);
    let res = await Axios.get(`${API}/get_client_data`,{headers:{"Authorization" : "Token "+localStorage.getItem('token')}})
    if(res.data) setClients(res.data);
  }

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
                  <Link to="#" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border" >
                    Invoicing
                  </Link>
                  <div className="bottom-border pb-3">
                    {/* <img src="images/admin.jpeg" width="50" className="rounded-circle mr-3"> */}
                    <Link to="#" className="text-white">
                      {localStorage.getItem('user_name')}
                    </Link>
                  </div>
                  <ul className="navbar-nav flex-column mt-4">
                  <li className="nav-item">
                      <Link to="/" className="nav-link text-white">
                        <i className="fas fa-home text-light mr-2"></i>Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/clients" className="nav-link text-white current">
                        <i className="fas fa-home text-light mr-2"></i>Client data
                      </Link>
                    </li>
                  </ul>
                </div>
  
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                  <div className="row align-items-center">
                    <div className="col-md-9">
                      <button data-toggle="modal" data-target="#addClientModal"  class="btn btn-outline-warning rounded"> Add Client</button>
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
       
       
        <section>
        <div class="container-fluid">
          <div class="row mb-5">
            <div class="col-xl-10 col-lg-9 col-md-12 ml-auto">
              <div class="row align-items-center">
                <div class="col-xl-12 col-12 mb-4 mb-xl-0">
                  <h3 class="text-muted text-center mb-3">Client Data</h3>
                  <table class="table table-striped bg-light text-center">
                    <thead>
                      <tr class="text-muted">
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>E-Mail</th>
                        <th>GSTIN</th>
                        <th>Company</th>
                        <th>Address</th>
                        <th>Created on</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((data,key) => (
                        <tr>
                          <td>{key+1}</td>
                          <td>{data.name}</td>
                          <td>{data.phone}</td>
                          <td>{data.email}</td>
                          <td>{data.gstin}</td>
                          <td>{data.company.name}</td>
                          <td>{data.address}</td>
                          <td>{data.created_on}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
      <div class="modal fade" id="addClientModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Client Addition</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
  
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Client Name</label>
                <input type="text" class="form-control" id="client_name" name="client_name" placeholder="Client Name" />
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword4">Client Phone</label>
                <input type="text" class="form-control" id="contact_number" name="contact_number" placeholder="Contact Number" />
                </div>
            </div>
            <div className="form-row col-md-12">
                <div class="form-group col-md-8">
                    <label for="inputAddress">Address</label>
                    <textarea type="text" class="form-control" id="address" name="address" placeholder="Enter Address" />
                </div>
                <div className="form-group col-md-4">
                <label for="inputAddress">E-Mail</label>
                    <input type="text" class="form-control" id="email" name="email" placeholder="Enter Email" />
                </div>
            </div>
            <div className="form-row col-md-12">
                <div class="form-group col-md-6">
                    <label for="inputAddress2">GSTIN</label>
                    <input type="text" class="form-control" name='gstin' id="gstin" placeholder="GSTIN" />
                </div>
                <div class="form-group col-md-6">
                <label for="inputCity">Company</label><br />
                <select name="company" id="company">
                    {
                        company.map(data=>(
                            <option value={data.company_unique}>{data.name}</option>
                        ))
                    }
                    <option></option>
                </select>
                {/* <input type="text" class="form-control" id="company" name="company" /> */}
                </div>
            </div>
  

            </div>
            <div class="modal-footer">
                <button type="button" id="close_modal" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        </form>
        
        
      </div>
    );


};

export default Dashboard;
