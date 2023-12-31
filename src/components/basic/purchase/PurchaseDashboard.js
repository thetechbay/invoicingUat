import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import './dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [refresh,setRefresh]=useState(true); 
  useEffect( ()=>{
    checkAuthentication();
},[refresh])

const checkAuthentication = () => {
    if(localStorage.getItem('token') === ""){
        window.location = '/dashboard';
    }
    else{
        window.location = '/login';
        toast("Please login, Session Expired",{"type":"success"});
    }
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
              <li className="nav-item"><Link to="/dashboard/purchase/bills" className="nav-link text-white current"><i className="fas fa-home text-light mr-2"></i>Purchase Bills</Link></li>
                <li className="nav-item"><Link to="/dashboard/purchase/paymentOut" className="nav-link text-white sidebar-link"><i className="fas fa-user text-light mr-2"></i>Payment Out</Link></li>
                <li className="nav-item"><Link to="/dashboard/purchase/order" className="nav-link text-white sidebar-link"><i className="fas fa-envelope text-light mr-2"></i>Purchase Order</Link></li>
                <li className="nav-item"><Link to="/dashboard/purchase/purchase_return" className="nav-link text-white sidebar-link"><i className="fas fa-shopping-cart text-light mr-2 "></i>Purchase return</Link></li>
              </ul>
            </div>

            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
              <div className="row align-items-center">
                <div className="col-md-4">
                  {/* <h4 className="text-light text-uppercase mb-0">Socrates</h4> */}
                </div>
                <div className="col-md-5">
                  
                </div>
                <div className="col-md-9 ml-auto">
                  <ul className="navbar-nav">
                    <li className="nav-item ml-md-auto"><Link to='/logout' className="nav-link text-white" ><i className="fas fa-sign-out-alt text-danger fa-lg"></i>Logout</Link></li>
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


    {/* <section>
      <div class="container-fluid">
        <div class="row mb-5">
          <div class="col-xl-10 col-lg-9 col-md-12 ml-auto">
            <div class="row align-items-center">
              <div class="col-xl-6 col-12 mb-4 mb-xl-0">
                <h3 class="text-muted text-center mb-3">Recent Outing</h3>
                <table class="table table-striped bg-light text-center">
                  <thead>
                    <tr class="text-muted">
                      <th>#</th>
                      <th>From-Date</th>
                      <th>To-date</th>
                      <th>Reason-For-Outing</th>
                      <th>Hostel</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>5-8-2019</td>
                      <td>25/08/2019</td>
                      <td>Home</td>
                      <td>BH-3</td>
                      <td><button type="button" class="btn btn-info btn-sm">Approve</button>
                      <button type="button" class="btn btn-danger btn-sm">Decline</button></td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>5-8-2019</td>
                      <td>25/08/2019</td>
                      <td>Bhatever</td>
                      <td>BH-3</td>
                     <td><button type="button" class="btn btn-info btn-sm">Approve</button>
                     <button type="button" class="btn btn-danger btn-sm">Decline</button></td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>5-8-2019</td>
                      <td>25/08/2019</td>
                      <td>udaipur</td>
                      <td>GH-4</td>
                      <td><button type="button" class="btn btn-info btn-sm">Approve</button>
                      <button type="button" class="btn btn-danger btn-sm">Decline</button></td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>5-8-2019</td>
                      <td>25/08/2019</td>
                      <td>udaipur</td>
                      <td>Studio Apartment</td>
                      <td><button type="button" class="btn btn-info btn-sm">Approve</button>
                      <button type="button" class="btn btn-danger btn-sm">Decline</button></td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>5-8-2019</td>
                      <td>25/08/2019</td>
                      <td>udaipur</td>
                      <td></td>
                      <td><button type="button" class="btn btn-info btn-sm">Approve</button>
                      <button type="button" class="btn btn-danger btn-sm">Decline</button></td>
                    </tr>
                  </tbody>
                </table>

             
                {/* <nav>
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






               <div class="col-xl-6 col-12">
               <h3 class="text-muted text-center mb-3">Live Attendence</h3>
                 <div class="bg-dark text-white p-4 rounded">
                  <h4 class="mb-5">Semester |||</h4>
                  <h6 class="mb-3">Data Structures</h6>
                  <div class="progress mb-4" >
                    <div class="progress-bar progress-bar-striped font-weight-bold">
                      91%
                    </div>
                  </div>
                  <h6 class="mb-3">Database Management System</h6>
                  <div class="progress mb-4" >
                    <div class="progress-bar progress-bar-striped font-weight-bold bg-success" >
                      82%
                    </div>
                  </div>
                  <h6 class="mb-3">Digital Electronics</h6>
                  <div class="progress mb-4" >
                    <div class="progress-bar progress-bar-striped font-weight-bold bg-info" >
                      67%
                    </div>
                  </div>
                  <h6 class="mb-3">Discrete Mathematics</h6>
                  <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped font-weight-bold bg-danger">
                      10%
                    </div>
              </div>

                  </div>
            </div> 
          </div>
        </div>
      </div>
      </div>
    </section> */}
    </div>
    );
}

export default Dashboard;