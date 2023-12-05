import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import InvoiceForm from './InvoiceForm';

const InvoiceTest = () => {

    return (
    <div>
             <nav className="navbar navbar-expand-lg navbar-light">
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>ß
  </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="container-fluid">
          <div className="row">

            <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
              <Link to="#" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Socrates</Link>
              <div className="bottom-border pb-3">
                <Link to="#" className="text-white">Aniket vyas</Link>
              </div>
              <ul className="navbar-nav flex-column mt-4">
              <li className="nav-item"><Link to="/" className="nav-link text-white p-1 mb-2 current"><small><i className="fas fa-home text-light fa-lg mr-3"></i>Home</small></Link></li>
                <li className="nav-item"><Link to="/dashboard/sales" className="nav-link text-white p-1 mb-2 sidebar-link"><i className="fas fa-user text-light fa-lg mr-3"></i>Sales</Link></li>
                <li className="nav-item"><Link to="/dashboard/inventory" className="nav-link text-white p-1 mb-2 sidebar-link"><i className="fas fa-envelope text-light fa-lg mr-3"></i>Inventory</Link></li>
                <li className="nav-item"><Link to="/dashboard/purchase" className="nav-link text-white p-1 mb-2 sidebar-link"><i className="fas fa-shopping-cart text-light fa-lg mr-3"></i>Purchase</Link></li>
                <li className="nav-item"><Link to="/dashboard/clients" className="nav-link text-white p-1 mb-2 sidebar-link"><i className="fas fa-chart-line text-light fa-lg mr-3"></i>Clients</Link></li>
            
              </ul>
            </div>

            {/* <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <h4 className="text-light text-uppercase mb-0">Socrates</h4>
                </div>
                <div className="col-md-5">
                  <InvoiceTest />
                </div>
                <div className="col-md-9">
                  <ul className="navbar-nav">
                    <li className="nav-item ml-md-auto"><Link to='/logout' className="nav-link" data-toggle="modal" data-target="#sign-out"><i className="fas fa-sign-out-alt text-danger fa-lg"></i>Logout</Link></li>
                  </ul>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </nav>

    <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
            <div className="row pt-md-5 mt-md-3 mb-5">
                <div className="card card-common">
                    
                    <InvoiceForm />
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    );
}


export default InvoiceTest;