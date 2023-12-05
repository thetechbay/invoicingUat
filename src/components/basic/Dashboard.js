import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [refresh,setRefresh]=useState(true); 
  useEffect( ()=>{
    checkAuthentication();
},[refresh])

const checkAuthentication = () => {
  console.log(localStorage.getItem('token'),"local")
    if(!localStorage.getItem('token') === ""){
      console.log("token nhi mila")
        window.location = '/login';
        toast("Please login, Session Expired",{"type":"success"});
    }
}

const PrintScreen = () => {
  window.print();
}
    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-light">
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="container-fluid">
          <div className="row">

            <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
              <Link to="#" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Socrates</Link>
              <div className="bottom-border pb-3">
                {/* <img src="images/admin.jpeg" width="50" className="rounded-circle mr-3"> */}
                <Link to="#" className="text-white">Aniket vyas</Link>
              </div>
              <ul className="navbar-nav flex-column mt-4">
              <li className="nav-item"><Link to="/dashboard/profile" className="nav-link text-white p-1 mb-2 current"><small><i className="fas fa-home text-light fa-lg mr-3"></i>Profile</small></Link></li>
                <li className="nav-item"><Link to="/dashboard/sales" className="nav-link text-white p-1 mb-2 sidebar-link"><i className="fas fa-user text-light fa-lg mr-3"></i>Sales</Link></li>
                <li className="nav-item"><Link to="/dashboard/inventory" className="nav-link text-white p-1 mb-2 sidebar-link"><i className="fas fa-envelope text-light fa-lg mr-3"></i>Inventory</Link></li>
                <li className="nav-item"><Link to="/dashboard/purchase" className="nav-link text-white p-1 mb-2 sidebar-link"><i className="fas fa-shopping-cart text-light fa-lg mr-3"></i>Purchase</Link></li>
                <li className="nav-item"><Link to="/dashboard/clients" className="nav-link text-white p-1 mb-2 sidebar-link"><i className="fas fa-chart-line text-light fa-lg mr-3"></i>Clients</Link></li>
            
              </ul>
            </div>

            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <h4 className="text-light text-uppercase mb-0">Socrates</h4>
                </div>
                <div className="col-md-5">
                  
                </div>
                <div className="col-md-9">
                  <ul className="navbar-nav">
                    <li className="nav-item ml-md-auto"><Link to='/logout' className="nav-link" data-toggle="modal" data-target="#sign-out"><i className="fas fa-sign-out-alt text-danger fa-lg"></i>Logout</Link></li>
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
                      
                      <div className="text-right text-secondary">
                        <h5>Clients</h5>
                        <h3>45</h3>
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
                      <div className="text-right text-secondary">
                        <h5>Sales </h5>
                        <h3>$39,000</h3>
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
                      <div className="text-right text-secondary">
                        <h5>Purchases</h5>
                        <h3>15,000</h3>
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
                      <div className="text-right text-secondary">
                        <h5>Payment</h5>
                        <h3>45,000</h3>
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
                <h3 class="text-muted text-center mb-3">Recent Transactions</h3>
                <table class="table table-striped bg-light text-center">
                  <thead>
                    <tr class="text-muted">
                      <th>#</th>
                      <th>Date</th>
                      <th>Invoice #</th>
                      <th>Party Name</th>
                      <th>Transaction Type</th>
                      <th>Payment Type</th>
                      <th>Amount</th>
                      <th>Balance due</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>5-8-2019</td>
                      <td><Link to="/sales/invoice/INV0000556">INV0000556</Link></td>
                      <td>Marble Corporation India</td>
                      <td>CASH</td>
                      <td>CASH</td>
                      <td class="text-success">10,000</td>
                      <td class="text-danger">10,000</td>
                      <td><button class="btn btn-outline-primary btn-sm" onClick={() => PrintScreen()}><i class="fa fa-print"></i></button></td>
                    </tr>
                  </tbody>
                </table>

             
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link to="#" class="page-link py-2 px-3">
                        <span>&laquo;</span>
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link to="#" class="page-link py-2 px-3">
                        1
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link to="#" class="page-link py-2 px-3">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link to="#" class="page-link py-2 px-3">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link to="#" class="page-link py-2 px-3">
                        <span>&raquo;</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
             
        
              </div>






             
          </div>
        </div>
      </div>
      </div>
    </section>
    </div>
    );
}

export default Dashboard;