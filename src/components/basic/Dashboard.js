import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './dashboard.css';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { CategoryScale } from "chart.js";
// import PieChart from "../components/PieChart";
import { Link } from 'react-router-dom';
import { Bar } from "react-chartjs-2";




Chart.register(CategoryScale);



const Dashboard = () => {
  const [refresh, setRefresh] = useState(true);
  const [chartData, setChartData] = useState({
    labels: ['Sales Count', "Company Count", "User Count", 'Client count'],
    datasets: [
      {
        label: "value ",
        data: [localStorage.getItem('sale_count'), localStorage.getItem('company_count'), localStorage.getItem('user_count'), localStorage.getItem('clients_count')],
        backgroundColor: [
          "cyan",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],

      }
    ]
  });

  useEffect(() => {
    checkAuthentication();
  }, [refresh])

  const checkAuthentication = () => {
    console.log(localStorage.getItem('token'), "local")
    if (!localStorage.getItem('token') != undefined) {
    }
    else {
      window.location = '/logout'
    }
  }



  // const data = {
  //   labels: labels,
  //   datasets: [{
  //     label: 'My First Dataset',
  //     data: [65, 59, 80, 81, 56, 55, 40],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //       'rgba(255, 205, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(201, 203, 207, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(255, 159, 64)',
  //       'rgb(255, 205, 86)',
  //       'rgb(75, 192, 192)',
  //       'rgb(54, 162, 235)',
  //       'rgb(153, 102, 255)',
  //       'rgb(201, 203, 207)'
  //     ],
  //     borderWidth: 1
  //   }]
  // };

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
                  <Link to="#" className="text-white">{localStorage.getItem('user_name')}</Link>
                </div>
                <ul className="navbar-nav flex-column mt-4">
                  <li className="nav-item"><Link to="/dashboard/profile" className="nav-link text-white p-1 mb-2 current"><small><i className="fas fa-home text-light fa-lg mr-3"></i>Profile</small></Link></li>
                  <li className="nav-item"><Link to="/dashboard/sales" className="nav-link text-white p-1 mb-2 sidebar-link"><i className="fas fa-user text-light fa-lg mr-3"></i>Sales</Link></li>
                  <li className="nav-item"><Link to="/dashboard/clients" className="nav-link text-white p-1 mb-2 sidebar-link"><i className="fas fa-chart-line text-light fa-lg mr-3"></i>Clients</Link></li>

                </ul>
              </div>

              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                <div className="row align-items-center">


                  <div className="col-md-12">
                    <ul className="navbar-nav">
                      <li className="nav-item ml-md-auto"><Link to='/logout' className="nav-link text-white text-right" data-toggle="modal" data-target="#sign-out"><i className="fas fa-sign-out-alt text-danger fa-lg"></i>Logout</Link></li>
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
        <div class="container">
          <div class="row mb-5">
            <div class="col-xl-10 col-lg-9 col-md-12 ml-auto">
              <div class="row align-items-center">
                <div class="col-xl-12 col-12 mb-4 mb-xl-0">
                  <div className="card card-common">
                    <div className="card-body">
                      <div className="chart-container">
                        <h2 style={{ textAlign: "center" }}>Usage Analytics</h2>
                        <Bar
                          data={chartData}
                          options={{
                            plugins: {
                              title: {
                                display: true,
                                text: "Clients, companies and sales analytics"
                              },
                              legend: {
                                display: false
                              }
                            }
                          }}
                        />
                      </div>
  
                    </div>
                  </div>
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