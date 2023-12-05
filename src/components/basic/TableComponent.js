import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import './dashboard.css';
import { Link } from "react-router-dom";
import Axios from "axios";
// import {API} from '../../../API';


const TableComponent = (sales) => {
    console.log(sales)


    return (
        <section>
        <div class="container-fluid">
          <div class="row mb-5">
            <div class="col-xl-10 col-lg-9 col-md-12 ml-auto">
              <div class="row align-items-center">
                <div class="col-xl-12 col-12 mb-4 mb-xl-0">
                  <h3 class="text-muted text-center mb-3">Recent Sales</h3>
                  <table class="table table-striped bg-light text-center">
                    <thead>
                      <tr class="text-muted">
                        <th>#</th>
                        <th>Date</th>
                        <th>Invoice #</th>
                        <th>Party Name</th>
                        <th>Transaction Type</th>
                        <th>Payment Type</th>
                        <th>Total Amount</th>
                        <th>Balance due</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sales.map((data,key) => {
                        <tr>
                          <td>{key}</td>
                          <td>{data.invoice_date}</td>
                          <td>{data.invoice_id}</td>
                          <td>{data.client.name}</td>
                          <td>fun</td>
                          <td>{data.total}</td>
                          <td>{data.subtotal}</td>
                          <td>Action</td>
                        </tr>
                      })}
                      {/* <tr>
                        <th>1</th>
                        <td>5-8-2019</td>
                        <td>
                          <Link to="/sales/invoice/INV0000556">INV0000556</Link>
                        </td>
                        <td>Marble Corporation India</td>
                        <td>CASH</td>
                        <td>CASH</td>
                        <td class="text-success">10,000</td>
                        <td class="text-danger">10,000</td>
                        <td>
                          <button
                            class="btn btn-outline-primary btn-sm"
                            onClick={() => PrintScreen()}
                          >
                            <i class="fa fa-print"></i>
                          </button>
                        </td>
                      </tr> */}
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
    )

}


export default TableComponent;