import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import './dashboard.css';
import { Link } from "react-router-dom";
import Axios from "axios";
import {API} from '../../API';
import InvoiceModal from "./invoice/InvoiceModal";
import $ from 'jquery'


const TableComponent = () => {
    const [sales, setSales] = useState([]);
    const [refresh,setRefresh] = useState([]);
    const [show, setShow] = useState(false);

    useEffect( () => {
      async function fetchData(){
        setRefresh(true);
        let res = await Axios.get(`${API}/get_recent_sales`,{headers:{"Authorization" : "Token "+localStorage.getItem('token')}})
        console.log(res.data);
        setSales(res.data)
        // if(res.data) return res.data;
        // console.log(sales,"sate")
      }
      fetchData();
  
    }, [refresh]);

    const handleReview = () => {
      console.log("han")
      setShow(true);
    }
    
    const openModal = (event) => {
      event.preventDefault()
      setShow(true);
    };
    const closeModal = (event) => setShow(false);

    const invoiceDelete = async(e) => {
      console.log(e.target.value);
      let res = await Axios.get(`${API}/delete_sales/${e.target.value}`,{headers:{"Authorization" : "Token "+localStorage.getItem('token')}})
        console.log(res.data);
        setRefresh(!refresh)
        // fetchData();
    }

    const handlePaymentSubmit = async(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      console.log(formData);
      e.preventDefault();
      var obj = {}
      for (let [key, value] of formData.entries()) {
          obj[key] = value;
      }
      console.log("payment",obj);
      let res = await Axios.post(`${API}/record_payment/${obj.sale_unique}`,obj,{headers:{"Authorization" : "Token "+localStorage.getItem('token')}})
      console.log("data after submit",res.data)
      $("#closePaymentModal").click();
      setRefresh(!refresh)
      toast("success");
    }

    return sales ?(
     
        <section>
        <div class="container-fluid">
          <div class="row justify-content-center mb-5">
            <div class="col-xl-10 col-lg-9 col-md-12 ml-auto">
              <div class="row align-items-center">
                <div class="col-xl-12 col-12 mb-4 mb-xl-0">
                  <h3 class="text-muted text-center mb-3">Recent Sales</h3>
                  <table class="table table-responsive table-striped table-dark text-center">
                    <thead>
                      <tr class="text-muted">
                        <th>#</th>
                        <th>Date</th>
                        <th>Party Name</th>
                        <th>Total Amount</th>
                        <th>Amount Received</th>
                        <th>Balance due</th>
                        <th>Invoice #</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sales.map((data,key) => (
                        <tr>
                          <td>{key+1}</td>
                          <td>{data.sales.invoice_date}</td>
                          <td>{data.sales.client.name}</td>
                          <td className="text-warning font-weight-bold">{data.sales.total_amount}</td>
                          <td className="text-success">{data.sales.amount_received}</td>
                          <td className="text-danger">{data.sales.total_amount - data.sales.amount_received}</td>
                         <td>
                         <button type="button" className="btn btn-primary"onClick={openModal}>Review</button>
                         <InvoiceModal review={true} showModal={show} amountInWords={data.sales.amount_in_words} closeModal={closeModal} info={data.sales} items={data.items} currency={data.sales.currency} subTotal={data.sales.subtotal} taxAmmount={data.sales.tax_amount} discountAmmount={data.sales.discount_amount} total={data.sales.total_amount}/>
                          </td> 
                          <td> <button type="button" onClick={invoiceDelete} value={data.sales.sale_unique} className="btn btn-danger">Delete</button>
                            <buton type="button"data-toggle="modal" data-target="#exampleModal" className="btn btn-success ml-1">Record Payment</buton>
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <form onSubmit={handlePaymentSubmit}>
                                  <div class="modal-body">
                                    <div className="row col-md-12">
                                      <div  className="form-group col-md-6 text-danger">
                                        Amount Pending : <p>{data.sales.total_amount}</p>
                                      </div>
                                      <div className="form-group col-md-6 text-success">
                                        Amount Paid : <p>{data.sales.amount_received? data.sales.amount_received:0}</p>
                                      </div>
                                    </div>
                                      <div className="form-group">
                                        <label>Amount</label>
                                        <input className="form-control" name="amount" type="text" />
                                        <input value={data.sales.sale_unique} name="sale_unique" type="hidden"/>
                                      </div>
                                      <div className="form-group">
                                        <label>Payment Type</label>
                                        <select name="payment_type">
                                          <option value="UPI">UPI</option>
                                          <option value="CHEQUE">Cheque</option>
                                          <option value="CASH">CASH</option>
                                          <option value="RTGS/NEFT">RTGS/NEFT</option>
                                        </select>
                                      </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" id="closePaymentModal" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                  </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </td>
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
    ) : <></>

}


export default TableComponent;